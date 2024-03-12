const User = require("../modals/user.modal");
const OtpGeneration = require("../Utils/OTPGeneration");
const SendOtp = require("../Utils/SendOtp");

const ForgetPasswordController = async (req, res) => {
    const { collegeId } = req.body;
    const userExists = await User.exists({ collegeId: req.body.collegeId  })
    // const userExists = await User.exists({ email: req.body.email  })
    if (userExists != null) {

        const user=await User.findOne(userExists._id)
        const GeneratedOtp = await OtpGeneration()
        try {
            await User.updateOne({ collegeId: collegeId }, { otp: GeneratedOtp })

            const isOtpSend = await SendOtp(user.email, GeneratedOtp)
            console.log(isOtpSend);
            // If otp has been send to user
            if (isOtpSend) {

                res.status(200).json({
                    msg: 'Hmm! OTP Send Successfully',
                    statusCode: 200
                })
            } else {
                res.status(400).json({
                    msg: 'Some Problem in Email Service',
                    statusCode: 400
                })
            }

        } catch (error) {
            console.error("Otp not updated")
            console.log(error)
            res.status(500).json({
                msg: 'Shit! Due to some internal error Otp is not generated',
                statusCode: 500
            })
        }


    }
    else {
        res.status(404).json({
            msg: 'shit! User not found',
            statusCode: 404
        })
    }
}
module.exports = ForgetPasswordController