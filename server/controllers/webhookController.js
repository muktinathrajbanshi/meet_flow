import { verifyWebhook } from "@clerk/express/webhooks";

export const handleClerkWebhook = async (req, res) => {
  try {
    const evt = await verifyWebhook(req);
  } catch (error) {}
};
