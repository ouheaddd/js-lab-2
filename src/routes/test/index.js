function GET(req, res, url, payload) {
  throw "error";
  res.json({ message: '/test GET request' });
}

function POST(req, res, url, payload) {
  res.json(payload);
}

export { GET, POST };