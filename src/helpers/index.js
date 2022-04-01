
const DotaWebAPI = require("dota-web-api");
let api = new DotaWebAPI("0522DC022E9EAF72551DB133E7CBA47A");


module.exports = {

randomNumber: function (number) {
        return Math.floor(Math.random() * number)
    },

getNewDate: function (date) {
    const newDate = new Date(date * 1000)
    const options = {
        year: "numeric",
        month: "long",
        day: "2-digit"
    }
    return newDate.toLocaleString('en-EN', options)
},
handleRandomMatchNumber: async function () {
    try {
        const getMatch = await api.getMatchHistory()
        const randomMatchNumber = Math.floor(Math.random() * getMatch.result.matches.length);
        return getMatch.result.matches[randomMatchNumber].match_id 
    } catch(e) {
        console.log("errorNumber");
    }
},
handleRandomMatchDetails: async function (randomMatchNumber) {
    try {
        const getMatchDetails = await api.getMatchDetails(randomMatchNumber)
        return getMatchDetails
    } catch(e) {
        console.log("errorId");
    }

},
handleRandomMatchNumberPromise: async function () {
   const data = await api.getMatchHistory();
   const number = await this.randomNumber(data.result.matches.length)
return number
},
handleAllmatches: async function () {
    try {
    const data = await api.getMatchHistory();
    const result = await data.result.matches
    return result
    } catch(e) {
        console.log("error");
    }
},
handlePlayerSummaries: async function (id) {
    try {
        const data = await api.getPlayerSummaries(id)
        console.log(data);
    } catch(e) {
        console.log("errorPLayer");
    }
},
justApi: function () {
    return api
}

 }

