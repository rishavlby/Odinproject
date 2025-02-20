
export class edit {
    static editForm() {
        var form = document.createElement("form");
        form.setAttribute("method", "post");

        const taskInput = document.createElement("input");
        taskInput.setAttribute("type", "text");
        taskInput.setAttribute("placeholder", "Edit task title");
        
        const submitBtn = document.createElement("input");
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("value", "Update");

        form.appendChild(taskInput);
        form.appendChild(submitBtn);

        document.body.appendChild(form);
    }
}
