const {movies} = require('../models')



class MovieControler{
    static async getall(req,res,next){
        try{
            const movie = await movies.findAll();
            res.status(200).json(movie)
        }catch (error){
            next(error)

        }
    }
    static async getOne(req,res,next){
        try{
           const{id} = req.params;
           const movie = await movies.findByPk(id);
           if(!movie) throw{name : 'notfound' }
            // return res.status(404).json({massage : 'note found'});

           
           res.status(200).json(movie)
        }catch (error){
            next(error);

        }
    }
    static async create(req,res,next){
        try{
            const {id,title,gendre,years} = req.body;
            const newMovies = await movies.create({id,title,gendre,years})
            res.status(201).json(newMovies);       
        
        }catch (error){
            next(error)

        } 
    }
    static async update(req,res,next){
        try{
           const{id} = req.params
           const{title,gendre,years} = req.body
           const updateMovies = await movies.update({title,gendre,years},{where :{id}})
           res.status(200).json(updateMovies)

        }catch (error){
            next(error)

        }
    }

static async delete(req,res,next){
    try{
       const {id} = req.params;
       await movies.destroy({where : {id}});
       res.status(200).json({message : 'movies delete sucsesful'})
    }catch (error){
        next(error)

    }
}  
    
}

module.exports = MovieControler
