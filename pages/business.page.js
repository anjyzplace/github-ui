var Page = require('./page');

var BusinessPage = Object.create(Page,{

personalmenu:{
    get:function () {
        return browser.element(".js-selected-navigation-item.selected.nav-item.nav-item-personal");
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

module.exports = BusinessPage;

