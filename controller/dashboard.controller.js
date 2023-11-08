const EventModel = require("../modals/event.modal")
const userModal = require("../modals/user.modal")

const Dashboard = async (req, res) => {
    const today = new Date().toLocaleDateString();

    let countEvent=0;
    let countUser=0;

    const dashboardData = {
        totalStudents: 0,
        totalEventss: 0,
        todayJoinedStudents: 0,
        todayCreatedEvent: 0,
    }
    const UserCollectionSize = await userModal.countDocuments({})
    const EventsCollectionSize = await EventModel.countDocuments({})

    dashboardData.totalStudents = UserCollectionSize
    dashboardData.totalEventss = EventsCollectionSize

    const UserData = await userModal.find({})
    const EventData = await EventModel.find({})

    UserData.forEach((ele) => {
        if (ele.createdAt !== undefined) {
            // console.log(ele);
            const createdDate = ele.createdAt
            // console.log(new Date(createdDate).toLocaleDateString());
            // console.log(new Date(createdDate).toLocaleDateString() === today);

            if (new Date(createdDate).toLocaleDateString() === today) {
                countUser = countUser + 1;
                dashboardData.todayJoinedStudents = countUser
                console.log(dashboardData);
            }
        }
    })
    EventData.forEach((ele) => {
        if (ele.createdAt !== undefined) {
            // console.log(ele);
            const createdDate = ele.createdAt
            // console.log(new Date(createdDate).toLocaleDateString());
            // console.log(new Date(createdDate).toLocaleDateString() === today);

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