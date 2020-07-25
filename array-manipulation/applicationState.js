class ApplicationState {
  constructor() {
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


    this.steps = [
      stepOne,
      stepTwo,
      stepThree
    ];
  }

  // Returns the step name and task name of the currently active task
  getActiveTask() {
 //find active steps
    let activeStep = this.steps.find(step => step.status === 'active');
    let activeTask = activeStep.tasks.find(task => task.status === 'active');

    return {
      stepName: activeStep.name,
      taskName: activeTask.name
    };
  }

  // Sets the provided step and task to 'active', 
  // all preceding steps and tasks to 'complete',  
  // and all future steps and tasks to 'pristine'.
  setActiveTask(stepName, taskName) {
    let stepStatus = 'complete';
    let taskStatus = 'complete';
    
    this.steps.forEach(step => {
    	if(step.name === stepName) {
      	step.status = 'active';
        stepStatus = 'pristine'
			} else {
      	step.status = stepStatus;
			}
      
      
      step.tasks.forEach(task => {
				if(task.name === taskName) {
        	task.status = 'active'
          taskStatus = 'pristine'
        } else {
        	task.status = taskStatus;
				}
        
      });  
    });
  }

  // Gets the step name and task name for the task immediately after the currently active task
  getNextTask() {
 
  }

  // Gets the step name and task name for the task immediately before the currently active task
  getPreviousTask() {
 
  }
}

let state = new ApplicationState();

state.setActiveTask('Step 3', 'Task F')
console.log('test:', state.getActiveTask());