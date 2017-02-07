var Page = require('./page');

var ExplorePage = Object.create(Page,{

personalmenu:{
    get:function () {
        return browser.element(".js-selected-navigation-item.selected.nav-item.nav-item-personal");
    }
},

open:{
    value: function() {
        browser.url('/');

        Page.open.call(this, 'explore');
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

module.exports = ExplorePage;

