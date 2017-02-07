    const expect = require('chai').expect;
    var assert = require('assert');
    var HomePage = require('../../pages/home.page')
    var PersonalPage = require('../../pages/personal.page')


    describe('Check Hero Text on Personal Page', function(){
        it('hero Text should be visible', function(){
        HomePage.open();
        HomePage.GoToPersonalPage();
        var isVisible = PersonalPage.HeroText.isVisible();
        expect(isVisible).to.be.true;
      })
    })
