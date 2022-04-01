const helpers = require("./index");
const path = require("path");
const fs = require('fs')

const jsonDb = fs.readFileSync(path.resolve(__dirname, "../db/db.json"), 'utf-8');
const database = JSON.parse(jsonDb);

const findingMatch = async () => {
    try{
        
        const allMatches = await helpers.handleAllmatches()
        for (let i = 0; i < allMatches.length; i++) {
            const details = await helpers.handleRandomMatchDetails(allMatches[i].match_id)
            if(details.result.game_mode === 22) {
                console.log("heres one!");
               let newMatch = {
                   id: details.result.match_id
               }
               console.log(newMatch);
               database.push(newMatch)
        }
    }
        console.log(database);
        const newDatabase = JSON.stringify(database, 4, null)
        fs.writeFileSync(path.resolve(__dirname, '../db/db.json'), newDatabase)
        console.log(allMatches.length);
    } catch(e){
        console.log("error");
    }
}

console.log(helpers.justApi());