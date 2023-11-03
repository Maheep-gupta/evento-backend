const EventModel = require("../modals/event.modal")

const GetEvent = async (req,res) => {
    const events = await EventModel.find({})
    if (events === null) {
        res.json({
            'message': 'No event found',
            'statusCode': 400,
        })
    } else {
        res.json({
            'data':events,
            'message': 'Events Send Successfully',
            'statusCode': 400,
        }) 
    }
}
module.exports=GetEvent