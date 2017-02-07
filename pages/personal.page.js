var Page = require('./page');

var PersonalPage = Object.create(Page,{

HeroText:{
    get:function () {
        return browser.element(".alt-h1.text-white.text-shadow-dark.lh-condensed.mb-3");
    }
},
open:{
    value: function() {
        browser.url('/');
        //console.log("Browser Driver")
        Page.open.call(this, 'personal');
    }
},
gotopersonal: {
    value: function(){
        this.personalmenu.click();
    }
},
comment: {
    value :function(){
        console.log("I see you");
        //browser.waitForVisible(".js-selected-navigation-item.selected.nav-item.nav-item-personal", 6000)
        return browser.getTitle();
    }
}


});

module.exports = PersonalPage;

