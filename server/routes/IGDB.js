const $ = require("axios");
const moment = require("moment");
// const year = moment().year();
// const month = moment().month() + 1;
// const date = moment().date();
// const unix = `${moment.utc(`${year}-${month}-${date}`, "YYYY-M-DD").format('X')}`;
const lastSunday = moment
  .utc()
  .day(-7)
  .hour(0)
  .minutes(0)
  .second(0)
  .format("X");
const lastSaturday = moment
  .utc()
  .day(-1)
  .hour(0)
  .minutes(0)
  .second(0)
  .format("X");
const key = process.env.IGDB_KEY;

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
          data: `fields game, date, game.name, game.cover.image_id, human, game.platforms; where platform = (48,49,130) & date > ${lastSunday} & date < ${lastSaturday};`
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
    res.json({success: 'true'})
  })
};
