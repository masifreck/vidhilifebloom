import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    // Check environment variables
    // -----------------------------
    if (
      !process.env.ZOHO_EMAIL ||
      !process.env.ZOHO_PASSWORD ||
      !process.env.ZOHO_HOST
    ) {
      console.error('Missing Zoho environment variables');

      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured.',
        },
        { status: 500 }
      );
    }

    // -----------------------------
    // Zoho SMTP
    // -----------------------------
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_HOST,
      port: Number(process.env.ZOHO_PORT || 465),
      secure: Number(process.env.ZOHO_PORT || 465) === 465,

      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
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
        address: process.env.ZOHO_EMAIL,
      },

      to: process.env.CONTACT_EMAIL || 'info@vlhpl.com',

      replyTo: {
        name,
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
        <div style="
          font-family: Arial, sans-serif;
          max-width: 650px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
        ">

          <div style="
            background: #eef7f4;
            padding: 24px;
          ">

            <h2 style="
              margin: 0;
              color: #17313a;
            ">
              New Website Enquiry
            </h2>

            <p style="
              margin: 6px 0 0;
              color: #6b7280;
            ">
              Vidhi Lifebloom Healthcare Private Limited
            </p>

          </div>

          <div style="padding: 24px;">

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Phone:</strong>
              ${phone || 'Not provided'}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <p>
              <strong>Service:</strong>
              ${service}
            </p>

            <div style="
              margin-top: 20px;
              padding: 18px;
              background: #f7faf9;
              border-radius: 8px;
            ">

              <strong>Message</strong>

              <p style="
                white-space: pre-wrap;
                line-height: 1.6;
                color: #374151;
              ">
                ${message}
              </p>

            </div>

          </div>

        </div>
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

        // Temporary detailed error for debugging
        message:
          error?.message ||
          'Unable to send your enquiry.',
      },
      { status: 500 }
    );
  }
}