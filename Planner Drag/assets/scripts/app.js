class Tooltip{}

class ProjectItem{

}


class ProjectList{
  constructor (type){
    const Prjitems = document.querySelectorAll(`#${type}-projects li`);
    
  }
}

class App {
static init() {
    const activeProjects = new ProjectList ('active')
    const finishedProjects = new ProjectList('finished');
}

}

App.init();