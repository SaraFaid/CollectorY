// redirection from pokemontcg.io to get all cards

const https = require('https');

module.exports = (app) => {
    // example url http://localhost:5000/api/pokemon-tcg/getAllCards
    app.get('/api/pokemon-tcg/getAllCards', (req, res) => {
        https.get('https://api.pokemontcg.io/v2/cards', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
              });
            
              // The whole response has been received. Print out the result.
              resp.on('end', () => {
                res.send(JSON.parse(data));
            });
        })
    })
}