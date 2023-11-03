const userModal = require("../modals/user.modal")
const { hashPasswordUtlis } = require("../utli/HashPassword")

const ResetPassword = async (req, res) => {
    const emailExists = await userModal.exists({ collegeId: req.body.collegeId })
    if (emailExists === null) {
        res.json({
            "message": "Internal Error Occurred",
            "statusCode": 400
        })
    } else {

        const hashedPassword = await hashPasswordUtlis(req.body.password)
        const userInfo = await userModal.findById(emailExists._id)
        const updatePassword = await userModal.findByIdAndUpdate(emailExists._id, { $set: { password: hashedPassword } })
        res.json({
            "message": "Password Successfully Changed",
            "statusCode": 200
        })
        await userModal.findByIdAndUpdate(emailExists._id,{$set: { otp:null  }})
    }
}
module.exports = ResetPassword