import postmark from "postmark";

const token = process.env.POSTMARK_SERVER_TOKEN;

export async function sendTransactionalEmail(
  to: string,
  subject: string,
  htmlBody: string
) {
  if (!token) {
    console.warn("POSTMARK_SERVER_TOKEN is not configured. Email skipped.");
    return;
  }

  const client = new postmark.ServerClient(token);

  await client.sendEmail({
    From: process.env.POSTMARK_FROM_EMAIL ?? "noreply@example.com",
    To: to,
    Subject: subject,
    HtmlBody: htmlBody,
    MessageStream: "outbound"
  });
}
