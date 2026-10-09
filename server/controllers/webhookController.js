import { verifyWebhook } from "@clerk/express/webhooks";
import { sql } from "../config/db.js";

export const handleClerkWebhook = async (req, res) => {
  try {
    const evt = await verifyWebhook(req);

    const eventType = evt.type;
    const data = evt.data;

    switch (eventType) {
      case "user.created":
      case "user.updated": {
        const userId = data.id;
        const primaryEmail = data.email_address?.[0]?.email_address || "";
        const name = `${data.first_name || "User"} ${data.last_name}`;
        const image = data.image_url || "";
        const plan = "free";

        await sql`
            INSERT INTO users (id, name, email, image, plan)
            VALUES (${userId}, ${name}, ${primaryEmail}, ${image}, ${plan})
            ON CONFLICT (email) DO UPDATE SET
            id = EXCLUDED.id,
            name = EXCLUDED.name,
            image = EXCLUDED.image,
            plan = EXCLUDED.plan,
            updated_at = NOW()
        `;
      }

      default:
        break;
    }
  } catch (error) {}
};
