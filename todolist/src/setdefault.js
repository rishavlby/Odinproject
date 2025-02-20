
export function setdefault() {
    // First, we check if there are any projects saved in localStorage
    const projects = JSON.parse(localStorage.getItem("projects")) || [];

    if (projects.length === 0) {
        alert("No projects found! Please create a project first.");
        return;
    }

    
    const defaultProject = projects[0];

    localStorage.setItem("defaultProject", JSON.stringify(defaultProject));

    alert(`The default project has been set to: ${defaultProject.name}`);

    
    const projectElements = document.querySelectorAll(".project");
    projectElements.forEach(projectElement => {
        if (projectElement.textContent === defaultProject.name) {
            projectElement.classList.add("default");
        } else {
            projectElement.classList.remove("default");
        }
    });
}
