const jwt =require('jsonwebtoken');

function auth(req,res,next) {
    const authHeader = req.headers.authorization;
    if (!authHeader){
        return res.status(401).json({massage : 'Authorization header mising'});
    }

    const token = authHeader.split(' ')[1];
    try{
        const decodedToken = jwt.verify(token,'secret');
        req.finduser = decodedToken;
        next()
    }catch{
        return res.status(401).json({massage: 'Invalid Token'})
    }

}

module.exports = auth ;