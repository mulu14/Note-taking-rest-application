import { NotetakerPage } from './app.po';

describe('notetaker App', () => {
  let page: NotetakerPage;

  beforeEach(() => {
    page = new NotetakerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
