const errorHandler = (err, req, res, next)=>{
    if(err.name === 'notfound')
    res.status(404).json({massage : 'tidak ada bro'})
}

module.exports = errorHandler