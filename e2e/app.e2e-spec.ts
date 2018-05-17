import { SportStoreAngularPage } from './app.po';

describe('sport-store-angular App', () => {
  let page: SportStoreAngularPage;

  beforeEach(() => {
    page = new SportStoreAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
