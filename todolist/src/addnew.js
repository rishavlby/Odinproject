
export class addNew {
    static createForm() {
        var br = document.createElement("br");
        var form = document.createElement("form");
        form.setAttribute("method", "post");
        form.setAttribute("action", "submit.php");

        // Create input fields
        const FN = this.createInput('text', 'Full Name', 'FullName');
        const DOB = this.createInput('text', 'DOB', 'dob');
        const EID = this.createInput('text', 'E-Mail ID', 'emailID');
        const PWD = this.createInput('password', 'Password', 'password');
        const RPWD = this.createInput('password', 'Re-enter Password', 'reTypePassword');

        // Create submit button
        const submitBtn = document.createElement("input");
        submitBtn.setAttribute("type", "submit");
        submitBtn.setAttribute("value", "Submit");

        // Append elements to form
        form.appendChild(FN);
        form.appendChild(br.cloneNode());
        form.appendChild(DOB);
        form.appendChild(br.cloneNode());
        form.appendChild(EID);
        form.appendChild(br.cloneNode());
        form.appendChild(PWD);
        form.appendChild(br.cloneNode());
        form.appendChild(RPWD);
        form.appendChild(br.cloneNode());
        form.appendChild(submitBtn);

        document.body.appendChild(form);
    }

    static createInput(type, placeholder, name) {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.setAttribute("placeholder", placeholder);
        input.setAttribute("name", name);
        return input;
    }
}
