export async function POST(request) {
  try {
    const body = await request.json();

    console.log('CONTACT API RECEIVED:', body);

    return Response.json({
      success: true,
      message: 'Contact API is working.',
    });
  } catch (error) {
    console.error('CONTACT API ERROR:', error);

    return Response.json(
      {
        success: false,
        message: 'Invalid request.',
      },
      {
        status: 400,
      }
    );
  }
}