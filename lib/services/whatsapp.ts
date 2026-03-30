import axios from "axios";

export async function sendWhatsAppNotification(message: string) {
  const endpoint = process.env.WHATSAPP_WEBHOOK_URL;

  if (!endpoint) {
    console.warn("WHATSAPP_WEBHOOK_URL not configured. WhatsApp message skipped.");
    return;
  }

  await axios.post(endpoint, { message });
}
