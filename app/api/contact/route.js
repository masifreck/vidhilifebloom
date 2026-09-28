import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

/**
 * Escape user-provided values before inserting them into HTML.
 */
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
    // =========================================
    // READ REQUEST
    // =========================================

    const formData = await request.json();

    const {
      name,
      phone,
      email,
      service,
      message,
    } = formData;


    // =========================================
    // VALIDATION
    // =========================================

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill all required fields.',
        },
        { status: 400 }
      );
    }


    // =========================================
    // ENVIRONMENT VARIABLES
    // =========================================

    const {
      ZOHO_EMAIL,
      ZOHO_PASSWORD,
      ZOHO_HOST,
      ZOHO_PORT,
      CONTACT_EMAIL,
    } = process.env;


    // =========================================
    // CHECK ENVIRONMENT
    // =========================================

    if (
      !ZOHO_EMAIL ||
      !ZOHO_PASSWORD ||
      !ZOHO_HOST ||
      !ZOHO_PORT ||
      !CONTACT_EMAIL
    ) {
      console.error(
        'Missing required email environment variables.'
      );

      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured.',
        },
        { status: 500 }
      );
    }


    // =========================================
    // SANITIZE USER INPUT
    // =========================================

    const safeName = escapeHtml(name);

    const safePhone = escapeHtml(
      phone || 'Not provided'
    );

    const safeEmail = escapeHtml(email);

    const safeService = escapeHtml(service);

    const safeMessage = escapeHtml(message);


    // =========================================
    // SMTP PORT
    // =========================================

    const port = Number(ZOHO_PORT);


    // =========================================
    // CREATE ZOHO SMTP TRANSPORTER
    // =========================================

    const transporter = nodemailer.createTransport({
      host: ZOHO_HOST,

      port,

      secure: port === 465,

      auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_PASSWORD,
      },
    });


    // =========================================
    // VERIFY SMTP CONNECTION
    // =========================================

    await transporter.verify();

    console.log('Zoho SMTP connection successful');


    // =========================================
    // SEND EMAIL
    // =========================================

    const mailInfo = await transporter.sendMail({

      // Sender must be the authenticated Zoho account
      from: {
        name: 'Vidhi Lifebloom Website',
        address: ZOHO_EMAIL,
      },

      // Destination comes from Netlify environment
      to: CONTACT_EMAIL,

      // User can directly reply to the person
      // who submitted the enquiry
      replyTo: {
        name,
        address: email,
      },

      subject: `New Website Enquiry - ${service}`,

      // =======================================
      // PLAIN TEXT EMAIL
      // =======================================

      text: `
New Website Enquiry

Name: ${name}
Phone: ${phone || 'Not provided'}
Email: ${email}
Service: ${service}

Message:
${message}
      `.trim(),


      // =======================================
      // HTML EMAIL
      // =======================================

      html: `
<!DOCTYPE html>

<html>

<head>

  <meta charset="UTF-8">

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  >

  <title>New Website Enquiry</title>

</head>


<body
  style="
    margin:0;
    padding:30px 15px;
    background:#f4f7f6;
    font-family:Arial,Helvetica,sans-serif;
  "
>


  <div
    style="
      max-width:650px;
      margin:0 auto;
      background:#ffffff;
      border:1px solid #e5e7eb;
      border-radius:14px;
      overflow:hidden;
    "
  >


    <!-- ================================
         HEADER
    ================================= -->

    <div
      style="
        background:#eef7f4;
        padding:26px 28px;
      "
    >

      <h2
        style="
          margin:0;
          color:#17313a;
          font-size:22px;
          line-height:1.3;
        "
      >
        New Website Enquiry
      </h2>


      <p
        style="
          margin:7px 0 0;
          color:#6b7280;
          font-size:14px;
          line-height:1.5;
        "
      >
        Vidhi Lifebloom Healthcare Private Limited
      </p>

    </div>


    <!-- ================================
         CONTENT
    ================================= -->

    <div
      style="
        padding:28px;
      "
    >


      <!-- DETAILS -->

      <table
        width="100%"
        cellpadding="0"
        cellspacing="0"
        style="
          border-collapse:collapse;
          font-size:15px;
        "
      >


        <!-- NAME -->

        <tr>

          <td
            style="
              padding:10px 0;
              width:120px;
              color:#6b7280;
              vertical-align:top;
            "
          >
            <strong>Name</strong>
          </td>

          <td
            style="
              padding:10px 0;
              color:#17313a;
              vertical-align:top;
            "
          >
            ${safeName}
          </td>

        </tr>


        <!-- PHONE -->

        <tr>

          <td
            style="
              padding:10px 0;
              color:#6b7280;
              vertical-align:top;
            "
          >
            <strong>Phone</strong>
          </td>

          <td
            style="
              padding:10px 0;
              color:#17313a;
              vertical-align:top;
            "
          >
            ${safePhone}
          </td>

        </tr>


        <!-- EMAIL -->

        <tr>

          <td
            style="
              padding:10px 0;
              color:#6b7280;
              vertical-align:top;
            "
          >
            <strong>Email</strong>
          </td>

          <td
            style="
              padding:10px 0;
              color:#17313a;
              vertical-align:top;
            "
          >
            ${safeEmail}
          </td>

        </tr>


        <!-- SERVICE -->

        <tr>

          <td
            style="
              padding:10px 0;
              color:#6b7280;
              vertical-align:top;
            "
          >
            <strong>Service</strong>
          </td>

          <td
            style="
              padding:10px 0;
              color:#17313a;
              vertical-align:top;
            "
          >
            ${safeService}
          </td>

        </tr>


      </table>


      <!-- ================================
           MESSAGE
      ================================= -->

      <div
        style="
          margin-top:22px;
          padding:20px;
          background:#f7faf9;
          border-radius:10px;
          border:1px solid #edf2f0;
        "
      >

        <strong
          style="
            display:block;
            margin-bottom:10px;
            color:#17313a;
            font-size:15px;
          "
        >
          Message
        </strong>


        <p
          style="
            margin:0;
            white-space:pre-wrap;
            line-height:1.7;
            color:#374151;
            font-size:14px;
          "
        >
          ${safeMessage}
        </p>

      </div>


    </div>


    <!-- ================================
         FOOTER
    ================================= -->

    <div
      style="
        padding:16px 28px;
        border-top:1px solid #edf2f0;
        background:#fafcfb;
        color:#8a9591;
        font-size:12px;
      "
    >

      Website enquiry received from
      Vidhi Lifebloom Healthcare.

    </div>


  </div>


</body>

</html>
      `,
    });


    // =========================================
    // SUCCESS LOG
    // =========================================

    console.log(
      'Zoho email sent:',
      mailInfo.messageId
    );


    // =========================================
    // SUCCESS RESPONSE
    // =========================================

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been sent successfully.',
      },
      { status: 200 }
    );


  } catch (error) {

    // =========================================
    // ERROR LOGGING
    // =========================================

    console.error('==============================');

    console.error('ZOHO EMAIL ERROR');

    console.error('==============================');

    console.error(
      'Message:',
      error?.message
    );

    console.error(
      'Code:',
      error?.code
    );

    console.error(
      'Command:',
      error?.command
    );

    console.error(
      'Response Code:',
      error?.responseCode
    );


    // =========================================
    // ERROR RESPONSE
    // =========================================

    return NextResponse.json(
      {
        success: false,
        message:
          'Unable to send your enquiry. Please try again later.',
      },
      { status: 500 }
    );
  }
}