
class ResponseService{

    responseMethod=(res, message)=>{
        let  responseObj={}
        return responseObj = {
            metadata: {
              status: 200, 
              message: message,
              responseCode: 200,
            },
            payload: {
              data: res,
            }
        }
    }
}

module.exports = new ResponseService();
