const {User, Role, Collection, Card, License} = require ('../../sequelize');

const https = require('https');



module.exports = (app) => {
    // example url http://localhost:5000/api/users/all
    app.get('/api/users/all', (req, res) => {
        User.findAll(
            {include: [{
                model: Role,
                as : 'roles',
            },
            {
                model: Collection,
                as : 'collections',
                include: [{
                    model: License,
                    as : 'license',
                },
                {
                    model: Card,
                    as : 'cards',
                }],
            }
            ]
        })
    .then(async (users) => {
        // https.get('https://api.pokemontcg.io/v2/cards/' + users.Card.cardId, (res) => {
        //     console.log(res)
        // })

        let cards = []

        var users = await Promise.all( users.map(async (user) => {
            user.collections.map((collection) => {
                if (collection.licenseId === 1) {
                    collection.cards.map ((card) => {
                        https.get('https://api.pokemontcg.io/v2/cards/' + card.cardId, (resp) => {
                            let data = '';
                            resp.on('data', (chunk) => {
                                data += chunk;
                              });
                            
                              // The whole response has been received. Print out the result.
                              resp.on('end', () => {
                                //card.push(JSON.parse(data));
                                //console.log(JSON.parse(data))
                                //card.data = JSON.parse(data);
                                //card.data.cardId = JSON.parse(data);

                            });
                        })
                    })
                }
            })
        })
    )
        
        res.json(users)

        })
        .catch((error) => {
            console.error(error)
            res.status(500).send('Internal server error')
        }
    )}
)}
    
    
