const jwt = require('jsonwebtoken')
const AuthService = require('../services/auth.services')

const userLogin = async (req, res) => {
  const { email, password } = req.body
  try {
    const response = await AuthService.login(email, password)
    if (response.isValid) {
      const data = {
        email: response.result.email,
        username: response.result.usermane,
        id: response.result.id,
      }
      const token = jwt.sign(data, 'secret world', {
        algorithm: 'HS512',
        expiresIn: '1m',
      })
      data.token = token
      console.log(data)
      res.json(data)
    } else {
      res.status(401).json({ message: 'bad credentials' })
    }
  } catch (error) {
    res.status(400).json(error.message)
  }
}

module.exports = {
  userLogin,
}
