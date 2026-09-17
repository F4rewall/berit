export default function handler(req, res) {
  const key = process.env.BERIT_API_KEY || process.env.VITE_BERIT_API_KEY || "";
  // CORS para iframe
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (!key) return res.status(404).json({ error: 'BERIT_API_KEY not configured in Vercel' });
  return res.status(200).json({ key });
}
