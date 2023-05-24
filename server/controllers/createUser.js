import User from "../database/models/users_model.js";

export const createUser = async(req, res) => {

    const { first_name, last_name, password, user_type, user_code } = req.body;
  
    try {
      await User.create({
        first_name,
        last_name,
        password,
        user_type,
        user_code,
      });
  
      res.render("adminTemplates/adminCreateUser",{message:"The user successfully added",color:"green"});
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred, please try again later." });
    }
  };