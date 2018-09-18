import { RecentWorkModule } from './recent-work.module';

describe('RecentWorkModule', () => {
  let recentWorkModule: RecentWorkModule;

  beforeEach(() => {
    recentWorkModule = new RecentWorkModule();
  });

  it('should create an instance', () => {
    expect(recentWorkModule).toBeTruthy();
  });
});
