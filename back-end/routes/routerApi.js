// centralized router for all api routes

module.exports = (app) => {
    require('./users/routerUser')(app);
    require('./roles/routerRole')(app);
    require('./rolesUsers/routerRoleUser')(app);
    require('./apiPokemonTcg/routerApiPkmn')(app);
}