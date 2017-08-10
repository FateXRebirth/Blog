describe('Chimp Mocha', function() {
  describe('Page title', function () {
    it('should be set by the Meteor method @watch', function () {
      browser.url('http://www.yahoo.com.tw');
      expect(browser.getTitle()).to.equal('Yahoo奇摩');
    });
  });
});