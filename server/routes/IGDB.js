const $ = require("axios");
const moment = require("moment");
const db = require('../models');
const lastSundayUnix = moment.utc().startOf('day').day(-7).format("X");
const lastSaturdayUnix = moment.utc().startOf('day').day(-1).format("X");

const yesterdayUnix = moment.utc().startOf('day').subtract(2, 'd').format('X')
const tomrrowUnix = moment.utc().startOf('day').format('X')
const todayUnix = moment.utc().startOf('day').subtract(1, 'd').format('X')

module.exports = function(app) {
  
  app.get('/api/recently_released', (req, res) => {
    (async function searchResults() {
      try {
        const results = await $({
          method: "get",
          url: "https://api-v3.igdb.com/release_dates",
          headers: {
            Accept: "application/json",
            "user-key": process.env.IGDB_KEY
          },
          data: `fields game, date, game.name, game.cover.image_id, human, game.platforms.name; sort date asc; limit 50;
                  where game.cover.image_id != null & 
                  platform = (48,49,130) & 
                  date > ${lastSundayUnix} & 
                  date < ${lastSaturdayUnix};`
        });
        const duplicatesRemoved = results.data.filter((elem, index, self) =>
            index === self.findIndex(isElem => isElem.game.id === elem.game.id)
        );
        return res.json(duplicatesRemoved);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  });

  app.get('/api/released_games', (req, res) => {
    (async function searchResults() {
      try {
        const results = await $({
          method: "get",
          url: "https://api-v3.igdb.com/release_dates",
          headers: {
            Accept: "application/json",
            "user-key": process.env.IGDB_KEY
          },
          data: `fields game, date, game.name, game.cover.image_id, human, game.platforms.name; sort date asc; limit 50;
                  where game.platforms != null & game.cover.image_id != null & platform = (48,49,130) & date >= ${yesterdayUnix} & date <= ${tomrrowUnix};`
        });
        const duplicatesRemoved = results.data.filter((elem, index, self) =>
            index === self.findIndex(isElem => isElem.game.id === elem.game.id)
        );
        return res.json(duplicatesRemoved);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  })

  app.get('/api/get_game/:id', (req, res) => {
    (async function searchResults() {
      try {
        const results = await $({
          method: "get",
          url: "https://api-v3.igdb.com/games",
          headers: {
            Accept: "application/json",
            "user-key": process.env.IGDB_KEY
          },
          data: `fields *, cover.image_id, platforms.name, genres.name, release_dates.human, screenshots.image_id, alternative_names; 
                  where id = ${req.params.id};`
        });
        return res.json(results.data);
      } catch (err) {
        console.log(err.response.data);
      }
    })();
  });

  app.put(`/api/favorites`, (req, res) => {
    const gameId = req.body.game;
    const id = req.body._id
    db.Users.findByIdAndUpdate(id, {$addToSet: {favorites: gameId} }, {new:true},
      (err, game) => {
        if (err) return res.status(500).send(err);
        return res.send({success: "Game Added"});
      })
  })

  app.post(`/api/get_favorites`, (req, res) => {
    db.Users.findById(req.body._id, (err, user) => {
      if(err) return res.status(500).send(err)
      let gamesArray = user.favorites;
      if(gamesArray.length !== 0) {
        (async function getGamesById() {
          try {
            const results = await $({
              method: "get",
              url: "https://api-v3.igdb.com/games",
              headers: {
                Accept: "application/json",
                "user-key": process.env.IGDB_KEY
              },
              data: `fields name, summary, hypes,total_rating, total_rating_count, cover.image_id, platforms.name, release_dates.human; 
                      where id= (${gamesArray.toString()});`
            });
            return res.json(results.data);
          } catch (err) {
            console.log(err.response.data);
          }
        })();
      }
    })
  })
}