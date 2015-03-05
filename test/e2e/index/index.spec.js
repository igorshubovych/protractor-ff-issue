describe("hello-protractor", function () {

  describe("index", function () {
    it("should display the correct title", function () {
      browser.get('/#');
      expect(browser.getTitle()).toBe('hello protractor');
    });

    it("fails in Chrome", function () {
      var button = element(by.buttonText('Button 1'));
      var message = element(by.binding('messageText'));

      button.click();
      expect(message.getText()).toBe('button 1 clicked');
    });

    it("fails in Firefox", function () {
      var button = element(by.buttonText('BUTTON 1'));
      var message = element(by.binding('messageText'));

      button.click();
      expect(message.getText()).toBe('button 1 clicked');
    });
  });
});
