import { verifyWebhook } from "@clerk/express/webhooks";

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
      }

      default:
        break;
    }
  } catch (error) {}
};
