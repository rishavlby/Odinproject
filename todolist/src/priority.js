
export function priority() {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow) {
        const index = Array.from(selectedRow.parentElement.children).indexOf(selectedRow);
        // Implement the priority change for the todo item
        console.log(`Change priority for task at index: ${index}`);
    } else {
        alert('Please select a task to change priority.');
    }
}
