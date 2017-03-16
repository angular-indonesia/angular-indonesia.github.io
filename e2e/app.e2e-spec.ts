import { AngularIndonesiaHomepagePage } from './app.po';

describe('angular-indonesia-homepage App', () => {
  let page: AngularIndonesiaHomepagePage;

  beforeEach(() => {
    page = new AngularIndonesiaHomepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
