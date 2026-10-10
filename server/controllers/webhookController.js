import { verifyWebhook } from "@clerk/express/webhooks";
import { sql } from "../config/db.js";

export const handleClerkWebhook = async (req, res) => {
  // 1. Verify the Clerk webhook signature
  let evt;

  try {
    evt = await verifyWebhook(req);
  } catch (error) {
    console.error("Clerk webhook verification failed:", error);

    return res.status(400).json({
      error: "Webhook signature verification failed",
    });
  }

  // 2. Process the verified event
  try {
    const { type: eventType, data } = evt;

    console.log("Clerk event received:", eventType);

    switch (eventType) {
      case "user.created":
      case "user.updated": {
        const userId = data.id;

        // Find the primary email address
        const primaryEmail =
          data.email_addresses?.find(
            (email) => email.id === data.primary_email_address_id,
          )?.email_address || data.email_addresses?.[0]?.email_address;

        if (!primaryEmail) {
          throw new Error(`No email address found for Clerk user ${userId}`);
        }

        const name =
          [data.first_name, data.last_name].filter(Boolean).join(" ") || "User";

        const image = data.image_url || "";

        if (eventType === "user.created") {
          // Insert new users; preserve the plan on repeated events.
          await sql`
            INSERT INTO users (id, name, email, image, plan)
            VALUES (
              ${userId},
              ${name},
              ${primaryEmail},
              ${image},
              'free'
            )
            ON CONFLICT (id) DO UPDATE SET
              name = EXCLUDED.name,
              email = EXCLUDED.email,
              image = EXCLUDED.image,
              updated_at = NOW()
          `;
        } else {
          // Update an existing user, or create a missing record.
          await sql`
            INSERT INTO users (id, name, email, image)
            VALUES (
              ${userId},
              ${name},
              ${primaryEmail},
              ${image}
            )
            ON CONFLICT (id) DO UPDATE SET
              name = EXCLUDED.name,
              email = EXCLUDED.email,
              image = EXCLUDED.image,
              updated_at = NOW()
          `;
        }

        console.log(`Neon user sync successful: ${userId} (${eventType})`);

        break;
      }

      case "user.deleted": {
        const userId = data.id;

        if (userId) {
          await sql`
            DELETE FROM users
            WHERE id = ${userId}
          `;

          console.log(`Deleted Neon user: ${userId}`);
        }

        break;
      }

      default:
        console.log(`Unhandled Clerk event: ${eventType}`);
    }

    return res.status(200).json({
      success: true,
      eventType,
    });
  } catch (error) {
    // Database errors and event-processing errors are logged separately.
    console.error("Neon database / webhook processing error:", error);

    return res.status(500).json({
      error: "Webhook processing failed",
    });
  }
};
