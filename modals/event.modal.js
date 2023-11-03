const mongoose = require('mongoose')


var EventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required:true
    },
    eventType: {
        type: String,
        required:true
    },
    startDate: {
        type: String,
        required:true
    },
    endDate: {
        type: String,
        required:true
    },
    eventDetail: {
        type: String,
        required:true
    },
    eventCoordinators:{
        type: String,
        required:true
    }
})
// Compile model from schema
const EventModel = mongoose.model('events', EventSchema);
module.exports=EventModel