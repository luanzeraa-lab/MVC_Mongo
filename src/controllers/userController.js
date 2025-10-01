const User = require('../models/userModel')

exports.getUsers = async function(req, res){
    try {
        const result = await User.find();
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

exports.create = function(req, res){
    const user = new User({
        name: req.body.name,
        age: req.body.age
    })
    user.save()
        .then(res.status(201).send(user.toJSON()))
        .catch((error)=>{
            res.status(500).send({message: `${error.message} 
                - Falha ao cadastrar usuário`})
        })
}

exports.details = async function(req, res){
    try {
        const result = await User.findById(req.params.id)
        res.status(200).json(result)
    } catch (error) {
        res.status(500).json(error)
    }
}



