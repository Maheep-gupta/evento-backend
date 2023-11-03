const mongoose = require('mongoose')

const CollegeIdSchema = new mongoose.Schema({
    collegeId: {
        type: Number,
        required:true
    }
})
const collegeStudentDataModal = mongoose.model('collegeStudentData', CollegeIdSchema)
module.exports=collegeStudentDataModal