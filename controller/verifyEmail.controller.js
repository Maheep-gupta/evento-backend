const userModal = require("../modals/user.modal")

const VerifyEmail = async (req, res) => {
    const emailExists = await userModal.exists({ collegeId: req.body.collegeId })
    if (emailExists===null) {
        res.json({
            "message": "This Account doesn't exist",
            "statusCode":400
        })
    } else {
        const userInfo = await userModal.findById(emailExists._id)
        // logic to send Otp
        const Generatedotp = await Math.floor(100000 + Math.random() * 900000).toString();
        await userModal.findByIdAndUpdate(emailExists._id,{$set: { otp:Generatedotp  }})
        res.json({
            "message": "Email verified",
            "statusCode": 200,
            'collegeId':userInfo.collegeId
        })
    }
}
module.exports=VerifyEmail