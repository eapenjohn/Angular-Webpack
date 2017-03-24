import UsersService from  './users.service'

factory.$inject=['$q']
function factory($q)
{
    return new UsersService($q)
}

angular.module('root.modules.users.service',[])
    .factory('usersService',factory)