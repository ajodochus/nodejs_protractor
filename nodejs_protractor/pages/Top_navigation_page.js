var Top_navigation_page = function () {
    var link_learn = element(by.xpath("//a[contains(text(),'Learn')]"));
    var link_learn_tutorial = element(by.xpath("//a[contains(text(),'Tutorial')]"));
    var tutorial_topic = element(by.xpath("//h1[@id='phonecat-tutorial-app']"));


    this.goto_tutorial_page = function () {
        link_learn.click();
        link_learn_tutorial.click();
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf(tutorial_topic), 10000, 'Element ' + tutorial_topic + ' too long to appear in the DOM');
        return tutorial_topic.getText();
    };

};
module.exports = new Top_navigation_page();