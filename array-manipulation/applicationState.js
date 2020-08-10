class ApplicationState {
  constructor(steps) {  
    this.steps = steps;
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
        stepStatus = 'pristine';
      } else {
        step.status = stepStatus;
      }
      
      
      step.tasks.forEach(task => {
        if(task.name === taskName) {
          task.status = 'active';
          taskStatus = 'pristine';
        } else {
          task.status = taskStatus;
        }
        
      });  
    });
  }

  // Gets the step name and task name for the task immediately after the currently active task
  getNextTask() {
    //Find the current task
    const current = this.getActiveTask();
    
    //Find current step and task index
    const currStepIndex = this.steps.findIndex(step => step.name === current.stepName);
    const currTaskIndex = this.steps[currStepIndex].tasks.findIndex(task => task.name === current.taskName);
    
    //Check to see if it's the last task
    if(currStepIndex + 1 === this.steps.length && currTaskIndex + 1 === this.steps[currStepIndex].tasks.length) return undefined;
    if(currTaskIndex + 1 === this.steps[currStepIndex].tasks.length) {
    //If it is return next step and first task
      return {
        stepName: this.steps[currStepIndex + 1].name,
        taskName: this.steps[currStepIndex + 1].tasks[0].name
      };
    } else {
    //Otherwise one to index to get the next step and task
      return {
        stepName: current.stepName,
        taskName: this.steps[currStepIndex].tasks[currTaskIndex + 1].name
      };
    }
  }

  // Gets the step name and task name for the task immediately before the currently active task
  getPreviousTask() {
    //Find current task
    const current = this.getActiveTask();
    
    //Get indexes of step and task
    const currStepIndex = this.steps.findIndex(step => step.name === current.stepName);
    const currTaskIndex = this.steps[currStepIndex].tasks.findIndex(task => task.name === current.taskName);
     
    //Check to see if it's the first task
    if(current.taskName === 'Task A') return 'No previous task available';
    if(currTaskIndex === 0) {
      //If it is return prev step and task
      const prevStep = this.steps[currStepIndex - 1];
       
      return {
        stepName: prevStep.name,
        taskName: prevStep.tasks[prevStep.tasks.length - 1].name
      };
    } else {
      //Otherwise return prev task
      return {
        stepName: current.stepName,
        taskName: this.steps[currStepIndex].tasks[currTaskIndex - 1].name
      };
    }    
  }
  
}

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

state.setActiveTask('Step 3', 'Task F');
console.log('test:', state.getPreviousTask());
