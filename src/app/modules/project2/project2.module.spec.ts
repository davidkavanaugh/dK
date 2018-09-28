import { Project2Module } from './project2.module';

describe('Project2Module', () => {
  let project2Module: Project2Module;

  beforeEach(() => {
    project2Module = new Project2Module();
  });

  it('should create an instance', () => {
    expect(project2Module).toBeTruthy();
  });
});
