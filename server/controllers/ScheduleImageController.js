import ScheduleImage from "../models/ScheduleImage.js";

export const createScheduleImage = async (req, res) => {
  try {
    const { scheduleOne, scheduleTwo, date } = req.body;

    if (!scheduleOne || !scheduleTwo || !date) {
      return res.status(401).json({
        message: "Заполните все поля",
      });
    }

    const schedule = new ScheduleImage({ scheduleOne, scheduleTwo, date });

    await schedule.save();

    res.status(200).json(schedule);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось создать расписание",
    });
  }
};

export const findLastElement = async (req, res) => {
  const response = await ScheduleImage.find().sort({ createdAt: -1 }).limit(1);
  if (!response) {
    return res.status(400).json("ничего не найдено");
  }
  return res.status(200).json(...response);
};

export const findAllElements = async (req, res) => {
  try {
    const allElements = await ScheduleImage.find().sort({ createdAt: -1 });

    return res.status(200).json(allElements);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось найти расписания",
    });
  }
};
