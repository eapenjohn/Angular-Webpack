
interface IMockupRegisterService {
    getAllMockups();
    start();
}

export interface IMockupRegisterServiceProivider {
    mockups: [];
    add(mockup: any);
    $get($injcetor: any): IMockupRegisterService;
}



class MockupRegisterService implements IMockupRegisterServiceProivider {
    constructor() {
        this.$get.$inject = ['$injector']
    }
    mockups = [];
    add(mockup: any) {
        this.mockups.push(mockup);
    }

    $get($injector: any): IMockupRegisterService {
           var getAllMockups= ()=>
            {
                this.mockups;
            }
        var start = () => {
            this.mockups.forEach((item) => {
                item.start($injector);
            })
        }
        return {
             getAllMockups: getAllMockups,
            start: start
        }
    }
}


function RunMockupRegisterService(mockupRegisterService: IMockupRegisterService) {
    mockupRegisterService.start();
}

RunMockupRegisterService.$inject = ['mockupRegisterService']

angular.module('app.mockups.register', [])
    .provider('mockupRegisterService', MockupRegisterService)
    .run(RunMockupRegisterService)