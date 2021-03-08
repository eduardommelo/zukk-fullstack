const { RequestPOST } = require('../controller/Authorization')

module.exports = (app) => {

    app.route('/api/login')
    .post(RequestPOST)

}