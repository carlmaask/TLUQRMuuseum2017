import { QrMuuseumHybridPage } from './app.po';

describe('qr-muuseum-hybrid App', () => {
  let page: QrMuuseumHybridPage;

  beforeEach(() => {
    page = new QrMuuseumHybridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
