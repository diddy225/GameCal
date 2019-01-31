const $ = require("axios");
require("dotenv").config();

module.exports = function(app) {

  app.post(`/api/results`, (req, res) => {
    const term = req.body.term;
    console.log(`you searched ${req.body.term}`);
    (async function searchResults () {
      try {
        const results = await $({
          method: "get",
          url: "https://api-v3.igdb.com/games",
          headers: {
            Accept: "application/json",
            "user-key": process.env.IGDB_KEY
          },
          data: `fields name, cover.image_id, summary, platforms.name, first_release_date; search "${term}"; where name != null & cover.image_id != null & first_release_date > 1420113600 & platforms = (48,49,130);`
        });
        return res.json(results.data);
      } catch (err) {
          console.log(err.response.data);
      }
    })();
  })


};
