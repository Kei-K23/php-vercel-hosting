const timeId = document.querySelector("#timeId");
const date = new Date();

timeId.innerText = `Today : ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
