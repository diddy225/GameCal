const $ = require("axios");
require("dotenv").config();

module.exports = function(app) {

  app.post(`/api/results`, (req, res) => {
    const term = req.body.term;
    (async function searchResults() {
      try {
        const results = await $({
          method: "get",
          url: "https://api-v3.igdb.com/games",
          headers: {
            Accept: "application/json",
            "user-key": process.env.IGDB_KEY
          },
          data: `fields name, cover.url, summary; search "${term}"; where name != null;`
        });
        res.json(results.data);
      } catch (err) {
          console.log(err.response.data);
      }
    })()
  })
};
