const EventModel = require("../modals/event.modal");
const userModal = require("../modals/user.modal");

const RegisterEventController = async (req, res) => {
    const userId = req.params.userId
    const fetchUser = await userModal.exists({ collegeId: userId })
    if (fetchUser !== null) {
        const userInfo = await userModal.findById(fetchUser._id)
        const fetchEvent = await EventModel.findById(req.body.eventId)

        const EventExists = await userInfo.participatedEvents.some(
            (event) => { event._id.toString() === req.body.eventId }
        )
        
        console.log(EventExists);



        if (EventExists) {
            res.json({
                'message': "Already registered",
                'statusCode': 400
            })
        } else {
            const UpdatedParticipatedEvent = await userModal.updateOne({ collegeId: userId }, { $push: { participatedEvents: fetchEvent } })
            console.log(UpdatedParticipatedEvent);
            const reFetchedUserInfo = await userModal.findById(fetchUser._id)
            res.json({

                "data": reFetchedUserInfo,
                'message': "Registered SuccessFully",
                'statusCode': 200
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