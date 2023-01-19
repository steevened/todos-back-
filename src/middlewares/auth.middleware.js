//validate the token

//if its valid, go ahead
//if not, forbidden

const jwt = require('jsonwebtoken')

require('dotenv').config()

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers
  token = token?.replace('Bearer ', '')
  // const token = req.headers.authorization
  console.log(token)
  if (token) {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: 'HS512' },
      (err, decoded) => {
        if (err) {
          res.status(400).json({
            error: 'invalid token',
            message: 'invalid token',
          })
        } else {
          console.log(decoded)
          next()
        }
      }
    )
  } else {
    res.status(400).json({
      error: 'no token provided',
      message: 'authentication undefined',
    })
  }
  // const decoded =
  // next()
}

module.exports = authMiddleware
