import BottomSheetController from './bottomSheet.controller'

export default class DetailsCompntCntrl {
    user = null;
    constructor($stateParams, usersService, public $mdBottomSheet) {
        //  alert($stateParams.id)
        // alert('s')

        usersService.getById($stateParams.id).then((user) => {
            this.user = user;
        })


    }

    showSheet(selected) {
        this.$mdBottomSheet.show(
            {
                parent: angular.element(document.querySelector('#content')),
                template: require('./bottomSheet.html'),
                controller: BottomSheetController,
                controllerAs: 'vm',
                clickOutsideToClose: true,
                locals: {
                    user: this.user
                },
                bindToController: true,
            }
        );
    }
}

DetailsCompntCntrl.$inject = ['$stateParams', 'usersService', '$mdBottomSheet']