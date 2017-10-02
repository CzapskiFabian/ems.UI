import { Ems.UIPage } from './app.po';

describe('ems.ui App', () => {
  let page: Ems.UIPage;

  beforeEach(() => {
    page = new Ems.UIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
