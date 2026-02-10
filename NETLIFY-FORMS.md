# Netlify Forms – Book Appointment

This site uses **Netlify Forms** (no third-party email services) for the “Book Appointment” form on `book.html`. Submissions are stored in Netlify and email notifications are configured in the Netlify dashboard only.

## Netlify checklist

- **Where the form name is defined:** In `book.html` on the `<form>` element: `name="appointment"`.
- **Exact form name in Netlify Dashboard:** **"appointment"** — go to **Site → Forms** and look for **appointment**.
- **Form appears after the first deploy** (and often after the first submission). To get **email notifications**: **Netlify → Site → Forms → [appointment] → Notifications → Add notification → Email** and set the recipient.

No Resend, SendGrid, Mailgun, or other external email apps. Notifications are configured only in Netlify.

## Enable email notifications (e.g. jepa614@gmail.com)

1. Log in at [app.netlify.com](https://app.netlify.com).
2. Open your site (Beauty by Anderson).
3. Left sidebar → **Forms** → click **appointment** → **Notifications** (or **Form notifications**) → **Add notification** → **Email notification** → set recipient → Save.

Submissions will then trigger an email for each new appointment request.

## Quick test (after deploy)

1. Deploy (push and wait for build).
2. On the live site open `/book.html`, fill and submit a test booking.
3. In **Netlify → Forms** you should see **appointment** and the new submission.
4. After adding an email notification, submit again and confirm the email arrives.

## Form details

- **Form name:** `appointment`
- **Fields:** name, phone, email, service, preferredDate, preferredTime, preferredDateTime (combined), sourcePage (hidden), bot-field (honeypot)
- **Spam:** honeypot `bot-field`; leave empty for real submissions
