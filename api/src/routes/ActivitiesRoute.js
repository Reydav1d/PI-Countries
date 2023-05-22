const { Router } = require("express");
const ActivitiesRouter = Router();
const {getActivities} = require('../handlers/getActivitiesHandler.js');
const {postActivities} = require('../handlers/postActivities.js')

ActivitiesRouter.post("/", postActivities);
ActivitiesRouter.get("/", getActivities);

module.exports = ActivitiesRouter;