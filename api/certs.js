const GOOGLE_CERTS_URL = 'https://www.googleapis.com/oauth2/v3/certs';

export default async function handler(req, res) {
  // 设置 CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const response = await fetch(GOOGLE_CERTS_URL);

    if (!response.ok) {
      throw new Error(`Google API returned ${response.status}`);
    }

    const data = await response.json();

    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(502).json({ error: error.message });
  }
}
