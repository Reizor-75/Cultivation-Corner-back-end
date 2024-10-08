import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

const decodeUserFromToken = (req, res, next) => {
  let token = req.get('Authorization') || req.query.token || req.body.token
  if (!token) return next()

  token = token.replace('Bearer ', '')
  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return next(err)

    req.user = decoded.user
    next()
  })
}

function checkAuth(req, res, next) {
  return req.user ? next() : res.status(401).json({ err: 'Not Authorized' })
}

function checkEmployee(req, res, next) {
  // Employee role === 500
  if (req.user && req.user.role >= 500 ) return next()
  return res.status(401).json({ err: 'Not Authorized' })
}

function checkOwner(req, res, next) {
  //Owner role === 900
  if (req.user && req.user.role === 900 ) return next()
  return res.status(401).json({ err: 'Not Authorized' })
}

export { 
  decodeUserFromToken, 
  checkAuth,
  checkEmployee,
  checkOwner
}