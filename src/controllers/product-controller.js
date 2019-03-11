const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const ValidationContract = require('../validators/validator')
const repository = require('../repositories/product-repository')

exports.get = (req, res, next) => {
    repository
        .get()
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send(error)
        })
}

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send(error)
        })
}

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.iud)
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send(error)
        })
}

exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then(data => {
            res.status(200).send(data)
        }).catch(error => {
            res.status(400).send(error)
        })
}

exports.post = (req, res, next) => {
    repository
        .create(req.body)
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
    repository
        .update(req.params.id, req.body)
        .then(x => {
            res.status(200).send({
                message: 'Produto atualizado com sucesso!'
            })
        }).catch(error => {
            res.status(400).send({
                message: 'Falha ao atualizar o produto!', data: error
            })
        })
}

exports.delete = (req, res, next) => {
    repository
        .delete(req.body.id)
        .then(x => {
            res.status(200).send({
                message: 'Produto removido com sucesso!'
            })
        }).catch(error => {
            res.status(400).send({
                message: 'Falha ao remover o produto!', data: error
            })
        })
}