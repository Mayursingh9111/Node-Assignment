const express =require("express");
const router =express.Router();
const jobController = require("../controller/job.controller")


router.post("/create",jobController.jobCreate )

router.get("/list",jobController.jobList )
router.patch("/edit", jobController.jobEdit)
router.delete("/delete", jobController.jobDelete)

module.exports=router;
