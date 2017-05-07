import { QrMuuseum17Page } from './app.po';

describe('qr-muuseum17 App', () => {
  let page: QrMuuseum17Page;

  beforeEach(() => {
    page = new QrMuuseum17Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
