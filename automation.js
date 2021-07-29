const axios = require("axios");
const professions = require("./Assets/professions2");

let keys = Object.keys(professions.professions);

console.log("staring article automation ")
keys.forEach(key=>{
    console.log("-",key)
    let tags = professions.professions[key].tags;
    tags.forEach(tag=>{
        console.log("--",tag);
        axios.get("http://localhost:5002/data/articles?title="+tag.toLowerCase()).then(res=>{
            console.log("---completed ",tag);
        }).catch(err=>{
            console.error(err,tag);
        })
    })
})
