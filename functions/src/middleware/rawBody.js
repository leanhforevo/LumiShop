export function captureRawBody(req, _res, next) {
  if (req.body && typeof req.body === 'object') {
    req.rawBodyText = JSON.stringify(req.body);
  } else {
    req.rawBodyText = req.body || '';
  }
  next();
}
