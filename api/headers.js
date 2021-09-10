module.exports = (req, res, next) => {
  res.setHeader('Cache-Control', '86400')
  next()
}
