
export function viewProjects() {
    const view = document.getElementById("content");
    view.innerHTML = ''; 

    for (let i = 0; i < localStorage.length; i++) {
        const projectName = localStorage.key(i);
        const projectDiv = document.createElement("div");
        projectDiv.textContent = projectName;
        view.appendChild(projectDiv);
    }
}
