import Student from "../database/models/student_model.js"
export const createUser = async(req, res) => {

    const { first_name, last_name,user_code } = req.body;
  
    try {
      await Student.create({
        first_name,
        last_name,
        user_code,
        courses_ids
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred, please try again later." });
    }
  };