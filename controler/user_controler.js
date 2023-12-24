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
            const {id,email,gender,password,role} = req.body;
            const {file}=req
            const photo = req.file.path;  
            const hashedPassword = await bcrypt.hash(password, 10);
            const imegeUrl = `http://localhost:3000/${file.path}`            
            // const data = await user.create({photo : imegeUrl})            
            const newUser = await user.create({
            
                id,
                email,
                gender,                
                password : hashedPassword,
                role,
                photo :imegeUrl

            });
          
            res.status(201).json({
                message: 'user Berhasil di tambahkan ',data : newUser
            })
        }catch (error){ 
            res.status(500).json({message : error.message})
           
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