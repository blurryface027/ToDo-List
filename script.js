/* function addToDo() {
    const inputElement = document.querySelector("input");
    const value = inputElement.value;
    console.log(value);
} */

/* let ctr = 0;
function callback() {
    console.log(ctr);
    ctr = ctr + 1;
}

setInterval(callback, 1000);  */

/* function deleteToDo(index) {
    const element = document.getElementById("todo-" + index);
    element.parentNode.removeChild(element);
} */


let ctr = 1;
function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}

function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", ctr);
    ctr = ctr + 1;
    newDivEl.innerHTML = "<div>" + value + "</div><button onclick='deleteTodo(" + (ctr - 1) + ")'>Delete</button>";
    document.querySelector("body").appendChild(newDivEl)
}