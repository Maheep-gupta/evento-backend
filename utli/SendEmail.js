const axios = require('axios');

const SendEmail = async (email, otp) => {

    console.log(email, otp);
    const options = {
        method: 'POST',
        url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'f830cd059cmshfa20dc2ec5bde35p131bcejsn1f852ea9f45a',
            'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
        },
        data: {
            personalizations: [
                {
                    to: [
                        {
                            email: email
                        }
                    ],
                    subject: 'Your OTP for Verification'
                }
            ],
            from: {
                email: '1thefreefire@gmail.com'
            },
            content: [
                {
                    type: 'text/plain',
                    value: `Your Otp is ${otp}`
                }
            ]
        }
    };


    try {
        const response = await axios.request(options);
        console.log(response.data);
        // res.json({
        //     "message": "Email verified",
        //     "statusCode": 200,
        //     'collegeId': userInfo.collegeId
        // })

    } catch (error) {
        console.error(error);
        // res.json({
        //     "message": "Failed to Send Otp",
        //     "statusCode": 500
        // })
    }
}
module.exports = SendEmail