//validate the token

//if its valid, go ahead
//if not, forbidden

const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers
  token = token.replace('Bearer ', '')
  // const token = req.headers.authorization
  console.log(token)
  const decoded = jwt.verify(
    token,
    'secret world',
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
  // next()
}

module.exports = authMiddleware
