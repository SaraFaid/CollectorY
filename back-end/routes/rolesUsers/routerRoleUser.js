// Router for rolesUsers
// possibility to get all rolesUsers
// possibility to get all roles by userId
// possibility to get all users by roleId
// possivility to get all admins

module.exports = (app) => {
    require('./getAllRolesUsers')(app);
    require('./getAllRolesByUsers')(app);
    require('./getAllUsersByRoles')(app);
    require('./getAllAdmin')(app);
}