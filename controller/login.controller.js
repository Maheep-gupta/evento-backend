const userModal = require("../modals/user.modal");
const bcrypt = require('bcrypt');

const LoginUser = async (req, res) => {
    const userExists = await userModal.exists({ collegeId: req.body.collegeId })
    console.log(userExists);
    if (userExists !== null) {
        const userInfo = await userModal.findById(userExists._id)
        console.log(userInfo);
        // Load hash from your password DB.
        bcrypt.compare(req.body.password, userInfo.password, function (err, result) {
            // result == true
            console.log(typeof req.body.password);
            if (result) {
                if (req.body.collegeId === 382) {
                    res.json({
                        'message': 'Logged In Successfully',
                        'statusCode': 200,
                        'role': 'Admin'
                    })
                } else {
                    res.json({
                        'message': 'Logged In Successfully',
                        'statusCode': 200,
                        'role': 'Student'
                    })
                }
            } else {
                res.json({
                    'message': "Incorrect Password",
                    'statusCode': 400
                })
            }
        });

    } else {
        res.json({
            'message': "Account doesn't Exists",
            'statusCode': 400
        })
    }
}
module.exports = LoginUser