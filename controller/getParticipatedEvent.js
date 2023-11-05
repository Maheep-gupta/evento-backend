const userModal = require("../modals/user.modal");

const GetParticipatedEventController = async (req, res) => {
    const userId = req.params.userId
    const userExists = await userModal.exists({ collegeId: userId })
    if (userExists !== null) {
        const userInfo = await userModal.findById(userExists._id)
        console.log(userInfo);
        res.json({
            "data":userInfo.participatedEvents,
            'message': "Data Found Successfully",
            'statusCode': 400
        })
    } else {
        res.json({
            'message': "Account doesn't Exists",
            'statusCode': 400
        })
    }
    }
    module.exports = GetParticipatedEventController