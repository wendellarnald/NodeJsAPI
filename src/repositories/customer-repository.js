const mongoose = require('mongoose')
const Customer = mongoose.model('Customer')

exports.create = async (data) => {
    const customer = new Customer(data)
    await customer.save()
}