
export function complete() {
    const selectedRow = document.querySelector('tr.selected');
    if (selectedRow) {
        const index = Array.from(selectedRow.parentElement.children).indexOf(selectedRow);
        // Implement toggle completion status for the todo item
        console.log(`Complete task at index: ${index}`);
    } else {
        alert('Please select a task to mark as complete.');
    }
}