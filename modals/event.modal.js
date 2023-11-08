const { default: axios } = require('axios');
const mongoose = require('mongoose')


const EventSchema = mongoose.Schema({
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
    },
    eventStatus:{
        type: String,
        required:true
    },
    participatedStudents: {
        type: Number,
        required:true
    },
    eventImage: {
        type: String,
        default:"https://source.unsplash.com/random/520x600/?Event,party,coding,sports"
    }
},{
    timestamps: true,
  })
// Compile model from schema
const EventModel = mongoose.model('events', EventSchema);
module.exports=EventModel