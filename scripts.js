const axios = require("axios");
const articles = require("./models/articles");
const util = require('util')
const httpError = require("./models/http-error");
const videos = require("./models/videos");

exports.get_articles = async (req,res,next)=>{
    if(!req.query.title) return next(new httpError("title can't be undefined","bhai title dedo",400));

    let response = await axios.get("http://localhost:5001/api/v1/scrape/medium?title="+req.query.title);
    const {data} = await response;
    if(!data) return next(new httpError("response from medium is undefined","response from medium is undefined",402));

    // console.log(util.inspect(data, {showHidden: false, depth: null}))
    try{
        await articles.insertMany(data.data,{ordered:false})
    }catch(err){
        return next(new httpError(err,"Can't insert the articles",500));
    }
    res.status(200).json({status:"ok",data})
}

exports.get_videos = async (req,res,next)=>{
    if(!req.query.title) return next(new httpError("title can't be undefined","bhai title dedo",400));

    let response = await axios.get("http://localhost:5001/api/v1/scrape/youtube?title="+req.query.title);
    const {data} = await response;
    if(!data) return next(new httpError("response from medium is undefined","response from medium is undefined",402));

    // console.log(util.inspect(data, {showHidden: false, depth: null}))
    try{
        await videos.insertMany(data.data,{ordered:false})
    }catch(err){
        return next(new httpError(err,"Can't insert the videos",500));
    }
    res.status(200).json({status:"ok",data})
}
