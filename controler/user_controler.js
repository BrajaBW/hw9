const {user} = require ('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class UserController{
    static async getall(req,res,next){
        try{
            const users = await user.findAll()
            res.status(200).json(users)
        } catch (error){
            next(error)
        }
    }

    static async register(req,res,next){
        try{
            const {id,email,gender,password,role} = req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await user.create({
                id,
                email,
                gender,
                email,
                password: hashedPassword,
                role

            });
            res.status(201).json(newUser)
        }catch (error){
            next(error)
        }
    }

    static async login(req, res, next){
        try{
            const {email, password} = req.body;
            const finduser = await user.findOne({where : {email}});

        if (!finduser){
            throw {name : 'invalidCredential'}
        }
            const passwordMach = await bcrypt.compare(password, finduser.password);
        if (!passwordMach){
            throw {name : 'invalidCredential'}
        }
        const token = jwt.sign(
            {
            id : finduser.id,
            email: finduser.email
        },
        'secret'
        );     
        
        res.status(200).json({token});
    }catch (err){
        next(err)
    }
}
}
module.exports = UserController