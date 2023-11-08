const EventModel = require("../modals/event.modal")
const userModal = require("../modals/user.modal")

const Dashboard = async (req, res) => {
    const today = new Date().toLocaleDateString();

    let countEvent = 0;
    let countUser = 0;
    const eventDataJson = {
        name: '',
        totalParticipants: 0
    }
    const dashboardData = {
        totalStudents: 0,
        totalEventss: 0,
        todayJoinedStudents: 0,
        todayCreatedEvent: 0,
        completeEventDetails: []
    }
    const UserCollectionSize = await userModal.countDocuments({})
    const EventsCollectionSize = await EventModel.countDocuments({})

    dashboardData.totalStudents = UserCollectionSize
    dashboardData.totalEventss = EventsCollectionSize

    const UserData = await userModal.find({})
    const EventData = await EventModel.find({})

    UserData.forEach((ele) => {
        if (ele.createdAt !== undefined) {




            const createdDate = ele.createdAt


            if (new Date(createdDate).toLocaleDateString() === today) {
                countUser = countUser + 1;
                dashboardData.todayJoinedStudents = countUser
                console.log(dashboardData);
            }
        }
    })
    EventData.forEach((ele) => {
        console.log(ele.participatedStudents);
        if (ele.participatedStudents !== undefined) {
            // eventDataJson.name = ele.eventName
            // eventDataJson.totalParticipants = ele.participatedStudents

            // console.log("Data ", eventDataJson);
            dashboardData.completeEventDetails.push({"name":ele.eventName,"totalParticipants":ele.participatedStudents})
        }
        if (ele.createdAt !== undefined) {
            const createdDate = ele.createdAt

            if (new Date(createdDate).toLocaleDateString() === today) {
                countEvent = countEvent + 1;
                dashboardData.todayCreatedEvent = countEvent
                console.log(dashboardData);
            }
        }
    })
    res.json({
        "data": dashboardData,
        'message': "Data Found Successfully",
        'statusCode': 400
    })
}
module.exports = Dashboard