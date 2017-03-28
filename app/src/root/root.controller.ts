export default class RootController
{
    constructor(public $mdSidenav)
    {

    }

    toggle()
    {
      this.$mdSidenav('left').toggle();
    }
}

RootController.$inject=['$mdSidenav']
