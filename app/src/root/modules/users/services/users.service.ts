export default class UsersService
{
    users=[
        {
            id:1,
            name: 'Thomas',
            avatar:'svg-1',
            description:''
        },
         {
             id:2,
            name: 'John',
            avatar:'svg-2',
            description:''
        },
         {
             id:3,
            name: 'Frank',
            avatar:'svg-3',
            description:''
        }

    ];
    constructor(public $q)
    {

    }

    get()
    {
     let defer= this.$q.defer();
      defer.resolve(this.users)
      return defer.promise;
    }
}
