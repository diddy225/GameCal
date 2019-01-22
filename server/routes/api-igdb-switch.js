const $ = require('axios');
const moment = require('moment');
require('dotenv').config();

module.exports = function (app) {
  const gamesId = [];
  let gamesQuery = '';
  const coverId = [];
  let coverQuery = '';
  const imageIds = [];
  const year = moment().year();
  const month = moment().month() + 1;
  const date = moment().date();
  const platforms = {switch: 130, xbox: 49, ps4: 48};
  (async () =>{
    try {
      const gamesReleasedToday = await $({
        method: 'get',
        url: 'https://api-v3.igdb.com/release_dates',
        headers: {
          'Accept': 'application/json',
          'user-key': process.env.IGDB_KEY
        },
        data:`fields game; where platform = ${platforms.switch} & human = "2019-Jan-11";`
      })
      gamesReleasedToday.data.map(game => gamesId.push(game.game))
      gamesQuery = `(${gamesId.filter(id => id !== undefined).join()})`

      const getCoverId = await $({
        method: 'get',
        url: 'https://api-v3.igdb.com/games',
        headers: {
          'Accept': 'application/json',
          'user-key': process.env.IGDB_KEY
        },
        data: `fields name, cover; where id=${gamesQuery};`
      })
      getCoverId.data.map(cover => coverId.push(cover.cover))
      coverQuery = `(${coverId.join()})`
      const getImageId = await $({
        method: 'get',
        url: 'https://api-v3.igdb.com/covers',
        headers: {
          'Accept': 'application/json',
          'user-key': process.env.IGDB_KEY
        },
        data: `fields *; where id=${coverQuery};`
      })
      getImageId.data.map(game => imageIds.push(game.image_id))
      app.get('/api/switch/releasedToday', function(req, res) {
        res.send(imageIds)
      })
    } catch (err) {
      console.log(err)
    }
  })();
}