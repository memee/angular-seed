'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

var mockModule = require('./backend.mock.js');

describe('my app', function() {

  beforeEach(function() {
    browser.addMockModule('httpBackendMock', mockModule.httpBackendMock);
  });


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

    it('should show app-name', function () {
      expect(element.all(by.css('[ng-view] p')).last().getText()).
          toMatch(/This is an app name: DROGO/);
    });

    it('should show some lorem ipsum when doing CORS', function () {
      expect(element.all(by.css('[ng-view] em')).first().getText()).
          toMatch(/sunt aut facere repellat provident occaecati excepturi optio reprehenderit/);
    })
  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
