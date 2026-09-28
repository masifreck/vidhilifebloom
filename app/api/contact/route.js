import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(value = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request) {
  try {
    const formData = await request.json();

    const {
      name,
      phone,
      email,
      service,
      message,
    } = formData;

    // -----------------------------
    // Validation
    // -----------------------------

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill all required fields.',
        },
        { status: 400 }
      );
    }

    // -----------------------------
    // Environment variables
    // -----------------------------

    const {
      ZOHO_EMAIL,
      ZOHO_PASSWORD,
      ZOHO_HOST,
      ZOHO_PORT,
      CONTACT_EMAIL,
    } = process.env;

    if (
      !ZOHO_EMAIL ||
      !ZOHO_PASSWORD ||
      !ZOHO_HOST ||
      !CONTACT_EMAIL
    ) {
      console.error('Missing required Zoho environment variables.');

      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured.',
        },
        { status: 500 }
      );
    }

    // -----------------------------
    // Sanitize values for HTML
    // -----------------------------

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone || 'Not provided');
    const safeEmail = escapeHtml(email);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message);

    // -----------------------------
    // Zoho SMTP transporter
    // -----------------------------

    const port = Number(ZOHO_PORT || 465);

    const transporter = nodemailer.createTransport({
      host: ZOHO_HOST,
      port,
      secure: port === 465,

      auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_PASSWORD,
      },
    });

    // -----------------------------
    // Verify SMTP connection
    // -----------------------------

    await transporter.verify();

    console.log('Zoho SMTP connection successful');

    // -----------------------------
    // Send email
    // -----------------------------

    const mailInfo = await transporter.sendMail({
      from: {
        name: 'Vidhi Lifebloom Website',
        address: ZOHO_EMAIL,
      },

      to: CONTACT_EMAIL,

      replyTo: {
        name: name,
        address: email,
      },

      subject: `New Website Enquiry - ${service}`,

      text: `
New Website Enquiry

Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email}
Service: ${service}

Message:
${message}
      `.trim(),

      html: `
        <!DOCTYPE html>
        <html>
          <body style="
            margin: 0;
            padding: 30px 15px;
            background: #f4f7f6;
            font-family: Arial, Helvetica, sans-serif;
          ">

            <div style="
              max-width: 650px;
              margin: 0 auto;
              background: #ffffff;
              border: 1px solid #e5e7eb;
              border-radius: 14px;
              overflow: hidden;
            ">

              <!-- Header -->

              <div style="
                background: #eef7f4;
                padding: 26px 28px;
              ">

                <h2 style="
                  margin: 0;
                  color: #17313a;
                  font-size: 22px;
                ">
                  New Website Enquiry
                </h2>

                <p style="
                  margin: 7px 0 0;
                  color: #6b7280;
                  font-size: 14px;
                ">
                  Vidhi Lifebloom Healthcare Private Limited
                </p>

              </div>


              <!-- Content -->

              <div style="
                padding: 28px;
              ">

                <table
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  style="
                    border-collapse: collapse;
                    font-size: 15px;
                  "
                >

                  <tr>
                    <td style="
                      padding: 10px 0;
                      width: 120px;
                      color: #6b7280;
                    ">
                      <strong>Name</strong>
                    </td>

                    <td style="
                      padding: 10px 0;
                      color: #17313a;
                    ">
                      ${safeName}
                    </td>
                  </tr>


                  <tr>
                    <td style="
                      padding: 10px 0;
                      color: #6b7280;
                    ">
                      <strong>Phone</strong>
                    </td>

                    <td style="
                      padding: 10px 0;
                      color: #17313a;
                    ">
                      ${safePhone}
                    </td>
                  </tr>


                  <tr>
                    <td style="
                      padding: 10px 0;
                      color: #6b7280;
                    ">
                      <strong>Email</strong>
                    </td>

                    <td style="
                      padding: 10px 0;
                      color: #17313a;
                    ">
                      ${safeEmail}
                    </td>
                  </tr>


                  <tr>
                    <td style="
                      padding: 10px 0;
                      color: #6b7280;
                    ">
                      <strong>Service</strong>
                    </td>

                    <td style="
                      padding: 10px 0;
                      color: #17313a;
                    ">
                      ${safeService}
                    </td>
                  </tr>

                </table>


                <!-- Message -->

                <div style="
                  margin-top: 22px;
                  padding: 20px;
                  background: #f7faf9;
                  border-radius: 10px;
                  border: 1px solid #edf2f0;
                ">

                  <strong style="
                    display: block;
                    margin-bottom: 10px;
                    color: #17313a;
                  ">
                    Message
                  </strong>

                  <p style="
                    margin: 0;
                    white-space: pre-wrap;
                    line-height: 1.7;
                    color: #374151;
                    font-size: 14px;
                  ">
                    ${safeMessage}
                  </p>

                </div>

              </div>

            </div>

          </body>
        </html>
      `,
    });

    console.log('Zoho email sent:', mailInfo.messageId);

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been sent successfully.',
      },
      { status: 200 }
    );

  } catch (error) {

    console.error('==============================');
    console.error('ZOHO EMAIL ERROR');
    console.error('==============================');

    console.error('Message:', error?.message);
    console.error('Code:', error?.code);
    console.error('Command:', error?.command);
    console.error('Response:', error?.response);
    console.error('Response Code:', error?.responseCode);

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to send your enquiry. Please try again later.',
      },
      { status: 500 }
    );
  }
}