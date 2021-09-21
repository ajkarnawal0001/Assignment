const {body,validationResult} = require('express-validator')
const schema = [
    body('name').isLength({min:5}),
    body('price').isLength({min:5})
]

module.exports = schema