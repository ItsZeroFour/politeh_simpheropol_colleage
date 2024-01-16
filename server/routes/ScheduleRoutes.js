import express from 'express'
import { ScheduleControllers } from '../controllers/index.js'

const router = express.Router()

router.post("/create", ScheduleControllers.createSchedule)
// router.patch("/update", ScheduleControllers.updateSchedule)

export default router