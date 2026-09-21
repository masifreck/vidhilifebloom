import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !phone || !email || !service || !message) {
      return Response.json(
        {
          success: false,
          message: 'Please fill in all required fields.',
        },
        {
          status: 400,
        }
      );
    }

    console.log('CONTACT API RECEIVED:', body);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Website Enquiry - ${service}`,

      html: `
        <div style="font-family: Arial, sans-serif; background:#f5f8f8; padding:30px;">
          
          <div style="
            max-width:650px;
            margin:0 auto;
            background:#ffffff;
            border-radius:12px;
            overflow:hidden;
            border:1px solid #e2ebea;
          ">

            <div style="
              background:#075e5a;
              padding:25px 30px;
              color:#ffffff;
            ">
              <h2 style="margin:0 0 6px;">
                New Website Enquiry
              </h2>

              <p style="margin:0; opacity:.85;">
                Vidhi Lifebloom Healthcare
              </p>
            </div>

            <div style="padding:30px;">

              <h3 style="
                margin-top:0;
                color:#172121;
              ">
                Customer Details
              </h3>

              <table style="
                width:100%;
                border-collapse:collapse;
              ">

                <tr>
                  <td style="
                    padding:10px 0;
                    color:#667575;
                    width:140px;
                  ">
                    Name
                  </td>

                  <td style="
                    padding:10px 0;
                    color:#172121;
                    font-weight:600;
                  ">
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:10px 0;
                    color:#667575;
                  ">
                    Phone
                  </td>

                  <td style="
                    padding:10px 0;
                    color:#172121;
                    font-weight:600;
                  ">
                    ${phone}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:10px 0;
                    color:#667575;
                  ">
                    Email
                  </td>

                  <td style="
                    padding:10px 0;
                    color:#172121;
                    font-weight:600;
                  ">
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:10px 0;
                    color:#667575;
                  ">
                    Service
                  </td>

                  <td style="
                    padding:10px 0;
                    color:#172121;
                    font-weight:600;
                  ">
                    ${service}
                  </td>
                </tr>

              </table>

              <div style="
                margin-top:25px;
                padding:20px;
                background:#f7fafa;
                border-radius:10px;
              ">

                <p style="
                  margin:0 0 8px;
                  color:#667575;
                  font-size:13px;
                ">
                  Message
                </p>

                <p style="
                  margin:0;
                  color:#172121;
                  line-height:1.6;
                ">
                  ${message}
                </p>

              </div>

            </div>

            <div style="
              padding:18px 30px;
              background:#f7fafa;
              border-top:1px solid #e2ebea;
              color:#8b9999;
              font-size:12px;
            ">
              This enquiry was submitted through the Vidhi Lifebloom website.
            </div>

          </div>

        </div>
      `,
    });

    if (error) {
      console.error('RESEND ERROR:', error);

      return Response.json(
        {
          success: false,
          message: error.message || 'Unable to send email.',
        },
        {
          status: 500,
        }
      );
    }

    console.log('EMAIL SENT:', data);

    return Response.json({
      success: true,
      message: 'Enquiry sent successfully.',
    });

  } catch (error) {
    console.error('CONTACT API ERROR:', error);

    return Response.json(
      {
        success: false,
        message: error.message || 'Something went wrong.',
      },
      {
        status: 500,
      }
    );
  }
}