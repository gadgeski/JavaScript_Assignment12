const todoInput = document.getElementById("todoInput");
const addTodoButton = document.getElementById("addTodoButton");
const todoList = document.getElementById("todoList");

addTodoButton.addEventListener("click", () => {
  const todoText = todoInput.value.trim(); // 入力値の前後にある空白を削除

  if (todoText !== "") {
    // 入力値が空でない場合のみ追加
    const listItem = document.createElement("li"); // 新しい<li>要素を作成

    const todoSpan = document.createElement("span"); // タスクテキスト用の<span>
    todoSpan.textContent = todoText;
    listItem.appendChild(todoSpan);

    const deleteButton = document.createElement("button"); // 削除ボタンを作成
    deleteButton.textContent = "削除";
    deleteButton.classList.add("delete-button"); // CSSクラスを追加
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listItem); // 削除ボタンがクリックされたら親の<li>を削除
    });
    listItem.appendChild(deleteButton);

    // オプション：タスクを完了済みとしてマークする機能
    todoSpan.addEventListener("click", () => {
      listItem.classList.toggle("completed"); // 'completed'クラスを追加/削除
    });

    todoList.appendChild(listItem); // リストに新しい項目を追加
    todoInput.value = ""; // 入力フィールドをクリア
  }
});

// Enterキーでタスクを追加できるようにする（オプション）
todoInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTodoButton.click(); // Enterキーが押されたら追加ボタンをクリックしたことにする
  }
});
