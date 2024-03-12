const OtpGeneration = () => {
    const otp = Math.floor(Math.random() * 1000000)
    console.log(otp);
    return otp
}
module.exports=OtpGeneration