const User = require("../modals/user.modal")

const VerifyOtpController =async (req,res) => {
    const { otp, collegeId } = req.body
    if (!otp || !collegeId) {
        res.status(404).json({
            msg: 'Email or OTP not found',
            statusCode:404
        })
    } else {
        const userExists =await User.findOne({ collegeId: collegeId })
        console.log(userExists.otp);
        if (userExists.otp === otp) {
            res.status(200).json({
                msg: 'Otp Verified Sucessfullly',
                statusCode:200
            })
        } else {
            res.status(401).json({
                msg: 'Invalid otp',
                statusCode:401
            })
        }
        
    }
    
}
module.exports=VerifyOtpController