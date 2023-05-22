const todoText = document.querySelector("#todoText");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");
//# ile id leri belirttikten sonra .querySelector ile seçtik.
addBtn.addEventListener("click",()=>{
    const listItem = document.createElement("li");
    listItem.textContent=todoText.value;
    todoList.append(listItem);    //bu son 3 satır ile li oluşturup verileri yazdırdık.
});