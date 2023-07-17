export const blankProjectLoad = ()=> {
    console.log("Called blankProjectLoad Module, creating blank project array now");
    let projectArray = [];
    let projectTitle = "Default project";
    projectArray.push({projectTitle});
    console.log(projectArray);
    return {projectArray, projectTitle};
}