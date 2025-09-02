import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();

    // IndexNow API endpoint
    const indexNowUrl = 'https://api.indexnow.org/indexnow';

    // Submit to IndexNow
    const response = await fetch(indexNowUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: 'sarvaseo.atrey.dev',
        key: '0177dad855f84bc3900bf90ee223115c',
        keyLocation: 'https://sarvaseo.atrey.dev/0177dad855f84bc3900bf90ee223115c.txt',
        urlList: body.urls || [body.url]
      })
    });

    if (response.ok) {
      return new Response(JSON.stringify({
        success: true,
        message: 'URLs submitted to IndexNow successfully'
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        }
      });
    } else {
      return new Response(JSON.stringify({
        success: false,
        message: 'Failed to submit to IndexNow',
        status: response.status
      }), {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      message: 'Internal server error'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
};

export const GET: APIRoute = async () => {
  return new Response(JSON.stringify({
    message: 'IndexNow API endpoint - Use POST to submit URLs',
    key: '0177dad855f84bc3900bf90ee223115c',
    keyLocation: 'https://sarvaseo.atrey.dev/0177dad855f84bc3900bf90ee223115c.txt'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
    }
  });
};

export const OPTIONS: APIRoute = async () => {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
};