function GET(req, res, url, payload) {
  res.json({ message: '/test4 GET request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };