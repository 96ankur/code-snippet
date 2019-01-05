/**
 * Instead of using this function 
 * we are using a npm module called
 * ----- express-async-errors----------
 */


module.exports = function (handler){
    return async(req, res, next)=>{
        try{
            await handler(req, res)
        }catch(ex){
            next(ex);
        }
    };
}