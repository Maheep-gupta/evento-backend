const EventModel=require('../modals/event.modal')
const CreateEvent = async (req, res) => {
    console.log(req.body);
    const eventExists = await EventModel.exists({ eventName: req.body.eventName })
    if (eventExists===null) {
        EventModel.create(
            {
                eventName:req.body.eventName,
                eventType:req.body.eventType,
                startDate:req.body.startDate,
                endDate:req.body.endDate,
                eventDetail:req.body.eventdetails,
                eventStatus:req.body.eventStatus,
                participatedStudents:req.body.participatedStudents,
                eventCoordinators: req.body.eventCoordinators,
                eventImage:req.body.eventImage
            }
            
        )
        res.json({
            'message': 'Event Created Successfully',
            'statusCode': 200,
        })
    } else {
        res.json({
            'message': 'Event Already Exists',
            'statusCode': 400,
        })
    }
    
}
module.exports=CreateEvent