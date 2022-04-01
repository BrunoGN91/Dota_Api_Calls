
const handlers = require('../helpers/index')
const DotaWebAPI = require("dota-web-api");
let api = new DotaWebAPI("0522DC022E9EAF72551DB133E7CBA47A");


module.exports = {
    heroes: function (req, res) {
        api.getHeroes()
    .then(data => {
        res.json(data)
    })
    },
    details: function (req, res) {
        api.getMatchDetails(req.params.id)
    .then(data => {
        res.json(data)
    })
    },
    itemsJson: function (req, res) {
        api.getItems()
            .then(data => res.json(data))
    },
    items: async function (req, res) {
       try {
           const items = await api.getItems();
           
           res.render('items', {items: items})
       } catch(e) {
           console.log('error');
       }
       
    },
    history: function (req, res) {
        api.getMatchHistory()
    .then(data => {
        res.json(data)
    })
    },
    randomMatch: (req, res) => {
        handlers.handleRandomMatchNumber().then((result) => { 
        console.log(result);
            api.getMatchDetails(result)
                .then((data) => {
                    console.log(data);
                    return res.render('dayMatch', {data: data})
                    })
                })
    },
    randomMatchJson: (req, res) => {
        handlers.handleRandomMatchNumber().then((result) => { 
            console.log(result);
                api.getMatchDetails(result)
                    .then((data) => {
                        console.log(data);
                        return res.json(data)
                        })
                    })
    }
}

