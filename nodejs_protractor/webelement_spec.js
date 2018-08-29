var top_navigation_page = require('./pages/Top_navigation_page.js');
var home_page = require('./pages/home_page.js');




describe('angularjs homepage', function () {
    it('should open the Tutorial Page', function () {
        home_page.get();

        expect(top_navigation_page.goto_tutorial_page()).toEqual('PhoneCat Tutorial App');
    });
});
