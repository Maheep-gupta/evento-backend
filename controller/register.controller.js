const userModal = require("../modals/user.modal");

const RegisterEventController = async (req, res) => {
    const userId = req.params.userId
    const userExists = await userModal.exists({ collegeId: userId })
    if (userExists !== null) {
        const userInfo = await userModal.findById(userExists._id)
        if (userInfo.participatedEvents.includes(req.body.eventName)) {
            res.json({
                'message': "Already registered",
                'statusCode': 400
            })
        } else {
            const UpdatedParticipatedEvent = await userModal.updateOne({ collegeId: userId }, { $push: { participatedEvents: req.body.eventName } })
            console.log(UpdatedParticipatedEvent);
            const reFetchedUserInfo = await userModal.findById(userExists._id)
            res.json({

                "data": reFetchedUserInfo,
                'message': "Data Found Successfully",
                'statusCode': 400
            })
        }

    } else {
        res.json({
            'message': "Account doesn't Exists",
            'statusCode': 400
        })
    }
}
module.exports = RegisterEventController