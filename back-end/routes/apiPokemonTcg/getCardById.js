// redirection from pokemontcg.io to get one card by id

const https = require('https');

module.exports = (app) => {
    // example url http://localhost:5000/api/pokemon-tcg/getCard/xy7-54
    app.get('/api/pokemon-tcg/getCard/:id', (req, res) => {
        https.get('https://api.pokemontcg.io/v2/cards', (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
                /*const tmp = JSON.parse(chunk)
                let index = 0;
                tmp.map((card) => {
                    if (card.id === req.params.id) {
                        data += chunk[index];
                    }
                    index++;
                })*/
              });
            
              // The whole response has been received. Print out the result.
              resp.on('end', () => {
                res.send(JSON.parse(data));
            });
        })
    })
}