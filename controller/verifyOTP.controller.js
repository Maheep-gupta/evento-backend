const userModal = require("../modals/user.modal")

const VerifyOTP = async (req, res) => {
    const emailExists = await userModal.exists({ collegeId: req.body.collegeId })
    
    const userInfo = await userModal.findById(emailExists._id)
    console.log(userInfo.otp);
    if (req.body.otp===userInfo.otp) {
        res.json({
            "message": "Otp Verified",
            "statusCode": 200,
            'collegeId':userInfo.collegeId
        })
    } else {
        res.json({
            "message": "Invalid Otp",
            "statusCode": 400,
        }) 
    }
}
module.exports=VerifyOTP