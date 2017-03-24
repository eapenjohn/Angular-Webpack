export default class UsersController
{
    users=[]
    constructor(public usersService)
    {
      this.get()
    }

    get()
    {
        return this.usersService.get().then((data)=>{
          this.users=data;
        })
    }
}

UsersController.$inject=['usersService']