/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const { nextTick } = require("process");
const JobModel = require("../model/job.model")
const jobCreate= async (req, res,next) => {
    try{

        console.log(req.body)
        // Insert data into db

        const jobObj ={
            ...req.body,
            isVacant:true
        }
       const response =  await JobModel.create(jobObj); //db.jobs.insertOne()
       console.log(response);
       
        res.json({
            success: true,
            message:` Job Created successfully ${response._id} `
        })
    }catch(err){
        next(err)
    }
}
const jobList =async(req, res,next) => {
    try{

        //Read data
        const minExperienceRequired = parseInt(req.query.minExperienceRequired || 0 );
      
        
        
    //    const jobsList =  await JobModel.find({
    //     minExperienceRequired:{
    //         $gte : minExperienceRequired
    //     }
    //    });
    const id = req.query.id
        const jobsList = await JobModel.findById(id)

        res.json({
            success: true,
            message: "List Job API",
            data:jobsList

        })

    }catch(err){
        next(err)
    }
}
const jobEdit =  async(req, res,next) => {
    try{
        console.log(req.query.id);
        console.log(req.body);
        await JobModel.findByIdAndUpdate(req.query.id,req.body)

        const findObj = {
            title:req.query.title
        }
        const upObj = req.body
        await JobModel.updateOne(findObj,upObj)
        res.json({
            success: true,
            message: "Job Edited Successfully"
        })
    }catch(err){ 
        next(err)
    }
    
}
const jobDelete =async(req, res) => {
    try{
        await JobModel.findByIdAndDelete(req.query.id)
        res.json({
            success: true,
            message: "Job Delete Successfully"
        })
    }catch(err){
next(err)
    }
}


const jobController={
    jobCreate,
    jobDelete,
    jobEdit,
    jobList
}
module.exports=jobController;