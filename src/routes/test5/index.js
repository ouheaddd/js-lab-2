function GET(req, res, url, payload) {
  res.json({ message: '/test5 GET request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };