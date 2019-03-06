const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.post = (req, res, next) => {
    const product = new Product(req.body)
    product
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Produto cadastrado com sucesso!'
            })
        }).catch(error => {
            res.status(400).send({
                message: 'Falha no cadastro do produto!', data: error
            })
        })
}

exports.put = (req, res, next) => {
    const id = req.params.id
    res.status(200).send({
        id: id,
        item: req.body
    })
}

exports.delete = (req, res, next) => {
    res.status(200).send(req.body)
}