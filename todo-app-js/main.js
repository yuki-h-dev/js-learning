const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteTodo(inputText);
};

const createIncompleteTodo = (todo) => {
  const li = document.createElement("li");

  const div = document.createElement("div");
  div.classList.add("list-row");

  const p = document.createElement("P");
  p.classList.add("todo-item");
  p.innerText = todo;

  const completeBtn = document.createElement("button");
  completeBtn.innerText = "完了";
  completeBtn.addEventListener("click", () => {
    const moveTarget = completeBtn.closest("li");
    completeBtn.nextElementSibling.remove();
    completeBtn.remove();

    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    backBtn.addEventListener("click", () => {
      const todoText = backBtn.previousElementSibling.innerText;
      createIncompleteTodo(todoText);
      backBtn.closest("li").remove();
    });

    moveTarget.firstElementChild.appendChild(backBtn);

    const completeList = document.getElementById("complete-list");
    completeList.appendChild(moveTarget);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "削除";
  deleteBtn.addEventListener("click", () => {
    const deleteTarget = deleteBtn.closest("li");
    deleteTarget.remove();
  });

  div.appendChild(p);
  div.appendChild(completeBtn);
  div.appendChild(deleteBtn);
  li.appendChild(div);

  const incompleteList = document.getElementById("incomplete-list");
  incompleteList.appendChild(li);
};

const addBtn = document.getElementById("add-btn");

addBtn.addEventListener("click", onClickAdd);
