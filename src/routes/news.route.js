const Route = require("express").Router();
const userDataList = require("../util/data");
const { getNews } = require("../services/fetchNews");
// @GET NEWS
Route.get("/", async (req, res, next) => {
  try {
    console.log(req.user);
    const { articles } = await getNews();
    res.status(200).send({ data: articles });
  } catch (err) {
    next(err);
  }
});
// @GET preferences
Route.get("/preferences", (req, res, next) => {
  try {
    const user = req.user;
    const getUser = userDataList.filter(
      (item) => item.username === user.username
    );
    res.status(201).status({
      message: "user preferences",
      data: getUser,
    });
  } catch (err) {
    next(err);
  }
});
// @PUT preferences
Route.put("/preferences", (req, res, next) => {
  try {
    const user = req.user;
    const preferencesList = req.body.preferences;
    if (Array.isArray(preferencesList) && preferencesList.length)
      res.status.send("invalid list");
    const modifyUserPref = { ...user, preferences: preferencesList };
    const getUser = userDataList.filter(
      (item) => item.username !== user.username
    );
    getUser.push(modifyUserPref);
    res.status(201).status({
      message: "user preferences updated",
      data: modifyUserPref,
    });
  } catch (err) {
    next(err);
  }
});
// @POST read
Route.post("/reads", (req, res, next) => {
  try {
    const user = req.user;
    const readsList = req.body.reads;
    if (Array.isArray(readsList) && readsList.length)
      res.status.send("invalid list");
    const modifyUserReads = { ...user, reads: readsList };
    const getUser = userDataList.filter(
      (item) => item.username !== user.username
    );
    getUser.push(modifyUserReads);
    res.status(201).status({
      message: "user reads added",
      data: modifyUserReads,
    });
  } catch (err) {
    next(err);
  }
});
// @GET reads
Route.get("/reads", (req, res, next) => {
  try {
    const user = req.user;
    const getUser = userDataList.filter(
      (item) => item.username === user.username
    );
    res.status(200).status({
      message: "user reads list",
      data: getUser.reads,
    });
  } catch (err) {
    next(err);
  }
});
module.exports = Route;
