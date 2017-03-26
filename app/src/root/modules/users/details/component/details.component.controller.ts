export default class DetailsCompntCntrl 
{
    user=null;
    constructor($stateParams,usersService)
    {
      //  alert($stateParams.id)
       // alert('s')

       usersService.getById($stateParams.id).then((user)=>{
        this.user=user;
       })
    }
}

DetailsCompntCntrl.$inject=['$stateParams','usersService']