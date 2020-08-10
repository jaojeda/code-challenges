const { ApplicationState } = require('./applicationState');

describe('ApplicationState class', () => {

  let stepOne = {
    name: 'Step 1',
    status: 'active',
    tasks: [{
      name: 'Task A',
      status: 'active'
    }, {
      name: 'Task B',
      status: 'pristine'
    }, {
      name: 'Task C',
      status: 'pristine'
    }]
  };
  
  let stepTwo = {
    name: 'Step 2',
    status: 'pristine',
    tasks: [{
      name: 'Task D',
      status: 'pristine'
    }]
  };
  
  let stepThree = {
    name: 'Step 3',
    status: 'pristine',
    tasks: [{
      name: 'Task E',
      status: 'pristine'
    }, {
      name: 'Task F',
      status: 'pristine'
    }, {
      name: 'Task G',
      status: 'pristine'
    }]
  };
  
  
  let state = new ApplicationState([
    stepOne,
    stepTwo,
    stepThree
  ]);

  it('gets active task', () => {
    expect(state.getActiveTask()).toEqual({ stepName: 'Step 1', taskName: 'Task A' });
  });
  
  it('sets new active task', () => {
    state.setActiveTask('Step 2', 'Task D');

    expect(state.getActiveTask()).toEqual({ stepName: 'Step 2', taskName: 'Task D' });
    expect(state.steps[0].status).toEqual('complete');
    expect(state.steps[2].status).toEqual('pristine');
  });

  it('gets next task', () => {
    expect(state.getNextTask()).toEqual({ stepName: 'Step 3', taskName: 'Task E' });

    state.setActiveTask('Step 3', 'Task E');
    expect(state.getNextTask()).toEqual({ stepName: 'Step 3', taskName: 'Task F' });
  });

  it('returns undefined if there is no more tasks after current', () => {
    state.setActiveTask('Step 3', 'Task G');

    expect(state.getNextTask()).toBeUndefined();
  });

  it('gets the previous park', () => {
    expect(state.getPreviousTask()).toEqual({ stepName: 'Step 3', taskName: 'Task F' });

    state.setActiveTask('Step 2', 'Task D');

    expect(state.getPreviousTask()).toEqual({ stepName: 'Step 1', taskName: 'Task C' });
  });  

  it('gets undefined if there is no previous task', () => {
    state.setActiveTask('Step 1', 'Task A');

    expect(state.getPreviousTask()).toBeUndefined();
  });
});
