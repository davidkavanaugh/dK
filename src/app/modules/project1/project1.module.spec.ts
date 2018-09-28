import { Project1Module } from './project1.module';

describe('Project1Module', () => {
  let project1Module: Project1Module;

  beforeEach(() => {
    project1Module = new Project1Module();
  });

  it('should create an instance', () => {
    expect(project1Module).toBeTruthy();
  });
});
