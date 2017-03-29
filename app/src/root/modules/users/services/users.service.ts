export default class UsersService
{
    users=[
        {
            id:1,
            name: 'Lewis',
            avatar:'svg-1',
            description:'Lewis Carl Davidson Hamilton,[4] MBE (born 7 January 1985) is a British Formula One racing driver from England, currently racing for the Mercedes AMG Petronas team. A three-time Formula One World Champion, he is regarded by fellow and former drivers as one of the greatest Formula One drivers in the history of the sport.[5][6][7] He won his first title with McLaren in 2008 before moving to Mercedes, where he won back-to-back titles in 2014 and 2015.'
        },
         {
             id:2,
            name: 'Ronald Dennis',
            avatar:'svg-2',
            description:'Ronald Dennis CBE (born 1 June 1947) is a British businessman and Official British Business Ambassador for The United Kingdom. Dennis is the Global Consultant for Minsheng Investment Corporation and also owner of Absolute Taste. He is best known for his former role as owner, CEO, chairman and founder of McLaren Technology Group. Dennis was removed from his McLaren management roles in 2016 but remains a director of the company and a 25% shareholder.'
        },
         {
             id:3,
            name: 'Sebastian Vettel',
            avatar:'svg-3',
            description:'Sebastian Vettel (German pronunciation: [zeˈbasti̯an ˈfɛtl̩]; born 3 July 1987)[2] is a German racing driver, currently driving in Formula One for Scuderia Ferrari. He is a four-time Formula One World Champion, having won the championship in 2010, 2011, 2012 and 2013 with Red Bull Racing.[3] He is among the most successful F1 drivers of all time.[4][5][6][7] He is one of only four drivers to have won four or more drivers'
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

    getById(id)
    {
     let defer= this.$q.defer();
      defer.resolve(this.users.filter((item) => item.id == id)[0])
      return defer.promise;
    }
}
