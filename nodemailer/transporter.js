const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: '1thefreefire@gmail.com',
      pass: 'qwertymnb321@',
    },
});
  
module.exports=transporter