
const User= require("../Models/User.model")

class USER {

  createUser = async (req) => {

    let user= req
    console.log(user)
    try {
      const res= await new User(user).save();
      return res;
    } catch (error) {
       throw new Error(error);
  }
  };
  


  updateUser =  (req) => {
    let data= req
    console.log(data)
    try {
      return User.findByIdAndUpdate(data._id, data.user, {
    new: true,
  })
    .then((user) => {
        console.log("USER SUCCESS", user)
      return user;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });



    } catch (error) {
       throw new Error(error);
  }
  };
  
  
  deleteUser =  (req) => {
    let data= req
    console.log(data)
    try {
      return User.remove({_id: data._id })
    .then((user) => {
      console.log("USER SUCCESS", user)
      return user;
    })
    .catch((err) => {
      console.log("ERROR", err)
      return false;
    });



    } catch (error) {
       throw new Error(error);
  }
  };

  

}

module.exports = new USER();
