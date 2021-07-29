const Router = require("express").Router();
const {get_articles,get_videos} = require("./scripts");

Router.get("/articles",get_articles)
Router.get("/videos",get_videos)
module.exports = Router