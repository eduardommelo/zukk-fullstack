const login = require('../../login.json')
const jwt = require('jsonwebtoken')

const RequestPOST = (req, res) => {
    const prepareStatus = { status: 200, login: {} }
    if(login.password !== req.body.password  || login.user !== req.body.user) {

        prepareStatus.status = 401
        prepareStatus.login.user = false
        prepareStatus.login.password = false
        prepareStatus.message = 'Unauthorized'

    }else prepareStatus.login.token = jwt.sign(prepareStatus.login, 'SECRET')
    
    res.status(prepareStatus.status)
    .json({ prepareStatus })
}

module.exports = {
    RequestPOST
}