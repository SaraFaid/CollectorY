const axios = require('axios').default;

function getAllSets() {
    return axios.get('https://api.pokemontcg.io/v2/sets')
}

module.exports = (app) => {
    app.get('/api/pokemon/sets', (req, res) => {
        getAllSets()
        .then((sets) => {
            res.send(sets.data);
        })
        .catch((err) => {
            console.log(err);
        })
    })
}