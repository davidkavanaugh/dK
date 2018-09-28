import { Project3Module } from './project3.module';

describe('Project3Module', () => {
  let project3Module: Project3Module;

  beforeEach(() => {
    project3Module = new Project3Module();
  });

  it('should create an instance', () => {
    expect(project3Module).toBeTruthy();
  });
});
