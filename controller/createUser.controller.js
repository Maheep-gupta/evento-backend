const collegeStudentDataModal = require("../modals/colllegeData.model.js");
const userModal = require("../modals/user.modal.js");
const { hashPasswordUtlis } = require("../utli/HashPassword.js");

const CreateUserController = async (req, res) => {
    const authenticatedUser = await collegeStudentDataModal.exists({ collegeId: req.body.collegeId })
    const hashedPassword = await hashPasswordUtlis(req.body.password)
    if (authenticatedUser !== null) {
        const userExists = await userModal.exists({ collegeId: req.body.collegeId })
        console.log(userExists);
        if (userExists === null) {

            await userModal.create({
                name: req.body.name,
                collegeId: req.body.collegeId,
                password: hashedPassword,
                email:req.body.email
            })
            res.json({
                'message': 'Account Created Successfully',
                'statusCode': 200
            })
        }
        else {
            res.json({
                'message': 'Account Already Exists',
                'statusCode': 400
            })
        }
    } else {
        res.json({
            'message': 'Entered College Id is Invaild',
            'statusCode': 400
        })
    }
}
module.exports = CreateUserController