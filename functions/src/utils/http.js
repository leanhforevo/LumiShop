export function ok(res, data = {}, status = 200) {
  return res.status(status).json({ ok: true, ...data });
}

export function fail(res, message = 'Internal error', status = 500, extra = {}) {
  return res.status(status).json({ ok: false, message, ...extra });
}
