import { MyCoolProjPage } from './app.po';

describe('my-cool-proj App', () => {
  let page: MyCoolProjPage;

  beforeEach(() => {
    page = new MyCoolProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
