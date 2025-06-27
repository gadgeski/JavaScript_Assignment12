目的：今後 TypeScript や React にスケールする為の準備段階

使用技術： JavaScript/CSS/HTML

<h1>HTML の解説</h1>
HTML ファイル (index.html など) は、ウェブページの構造を定義します。

<h3>!DOCTYPE html</h3> このドキュメントがHTML5であることを宣言します。

<h3>html lang="ja"</h3> HTMLドキュメントの開始を示し、言語が日本語であることを指定します。

<h3>head</h3> ウェブページのメタ情報（ページ自体には表示されない情報）を設定する部分です。

<h3>meta charset="UTF-8"</h3> 文字コードをUTF-8に設定し、日本語などが正しく表示されるようにします。

<h3>meta name="viewport" content="width=device-width, initial-scale=1.0"</h3> レスポンシブデザイン（様々なデバイスの画面サイズに対応）のために、表示領域の幅をデバイスの幅に合わせ、初期のズームレベルを設定します。

<h3>title</h3> ウェブブラウザのタブに表示されるページのタイトルを設定します。

<h3>link rel="stylesheet" href="style.css"</h3> style.cssという外部CSSファイルを読み込み、ページの見た目を設定します。

<h3>body</h3> ウェブページに表示されるすべてのコンテンツを格納する部分です。
     
<h3>div class="box">シンプルなTodoリスト</h3> 「シンプルなTodoリスト」というテキストを含むdiv要素です。後述のCSSで特別な装飾が施されます。
     
<h3>br</h3> 改行タグです。
     
<h3>div class="todo-input-area"</h3> 新しいタスクを入力するための入力欄と追加ボタンをまとめるdiv要素です。
     
<h3>input type="text" id="todoInput" placeholder="新しいタスクを入力..."</h3> テキスト入力欄です。id="todoInput"でJavaScriptからこの要素を特定できます。placeholderは、入力する前に表示される薄いテキストです。
     
<h3>button id="addTodoButton"</h3> タスクを追加するためのボタンです。id="addTodoButton"でJavaScriptからこのボタンを特定できます。
     
<h3>ul id="todoList"</h3> 追加されたTodoタスクがリストとして表示される場所です。最初は空ですが、JavaScriptによってここに<li>要素が追加されます。

<h3>script src="script.js"</h3> script.jsという外部JavaScriptファイルを読み込み、ページの動的な振る舞いを設定します。このタグは<body>の最後に配置されることが多く、HTML要素がすべて読み込まれてからJavaScriptが実行されるようにします。

<h1>CSS: ウェブページの見た目を整える</h1>
CSSファイル (style.cssなど) は、HTML要素の見た目（色、サイズ、配置など）を定義します。
全体的なスタイル

- body: ウェブページ全体の背景、フォント、配置などを設定します。

  - background: 背景画像を設定し、繰り返しなし (no-repeat) で画面全体を覆う (cover) ようにします。

  - font-family: フォントの種類を設定します。

  - display: flex; flex-direction: column; align-items: center;: ページ全体のコンテンツを中央に配置するために Flexbox を使用しています。

  - min-height: 100vh;: ページの高さがブラウザの表示領域の高さと同じになるようにします。

  - margin: 0; padding-top: 50px;: 余白を調整し、上部にパディングを追加します。

  - color: #333;: テキストの色を設定します。

<h3>Todoリスト関連のスタイル</h3>

- .todo-input-area: 入力欄と追加ボタンを囲む部分のスタイルです。

  - display: flex;: 子要素 (input と button) を横並びにするために Flexbox を使用します。

  - box-shadow: 要素に影をつけます。

  - border-radius: 角を丸くします。

- #todoInput: タスク入力欄のスタイルです。

  - flex-grow: 1;: todo-input-area 内で利用可能な残りのスペースをすべて埋めるようにします。

  - padding, font-size, border, outline: 入力欄の見た目を調整します。

- #addTodoButton: 追加ボタンのスタイルです。

  - background-color, color, border, font-size: ボタンの色、テキスト色、枠線、フォントサイズを設定します。

  - cursor: pointer;: マウスカーソルがボタンの上に乗ったときにポインターの形に変わるようにします。

  - transition: ホバー時の色の変化を滑らかにします。

- #addTodoButton:hover: 追加ボタンにマウスが乗ったときのスタイルです。背景色が少し濃くなります。

- #todoList: Todo タスクのリスト（ul 要素）のスタイルです。

  - list-style: none;: デフォルトのリストマーカー（点や数字）を消します。

  - padding: 0;: パディングをなくします。

- #todoList li: 個々の Todo タスク（li 要素）のスタイルです。

  - background-color, padding, margin-bottom, border-radius, box-shadow: リスト項目の背景、余白、角丸、影を設定します。

  - display: flex; justify-content: space-between; align-items: center;: テキストと削除ボタンを両端に配置し、垂直方向の中央に揃えるために Flexbox を使用します。

- #todoList li.completed: completed クラスが追加された Todo タスクのスタイルです。タスクが完了したときに適用されます。

  - text-decoration: line-through;: テキストに打ち消し線を表示します。

  - color, background-color: テキストと背景の色を薄くします。

- #todoList li button.delete-button: 削除ボタンのスタイルです。

  - background-color, color, border, padding, border-radius, font-size: ボタンの色、テキスト色、枠線、パディング、角丸、フォントサイズを設定します。

- #todoList li button.delete-button:hover: 削除ボタンにマウスが乗ったときのスタイルです。背景色が少し濃くなります。

<h3>Box関連のスタイル</h3>
.boxクラスは、HTMLにある「シンプルなTodoリスト」と書かれたdiv要素に適用されるスタイルです。この部分は、ホバー時にアニメーションする特徴的な枠線と背景効果を持っています。

- .box: 箱のような要素の基本スタイルです。

  - width, height: 幅と高さを設定します。

  - margin: 13% auto 0;: 上部に余白を取り、左右中央に配置します。

  - display: flex; align-items: center; justify-content: center;: テキストを中央に配置します。

  - color, font-size, font-weight: テキストの色、サイズ、太さを設定します。

  - position: relative;: ::before と::after 疑似要素を配置するための基準点を設定します。

  - transition: 0.4s;: ホバー時の変化を滑らかにします。

- .box::before, .box::after: ::before と::after は、要素の前後に追加できる疑似要素です。ここでは、box 要素の四隅に装飾的な枠線を作成しています。

  - content: "";: 疑似要素のコンテンツを空にすることで、純粋に装飾として使用します。

  - width: 50px; height: 50px;: 初期サイズを設定します。

  - border-top, border-left, border-bottom, border-right: 上、左、下、右の枠線を作成します。

  - position: absolute;: box 要素内での絶対位置に配置します。

  - transition, transition-delay: ホバー時の変化を滑らかにし、変化が始まるまでの時間を遅らせます。

- .box:hover:before, .box:hover::after: box 要素にマウスが乗ったときに::before と::after 疑似要素のスタイルが変化します。

  - width: 100%; height: 100%;: 疑似要素が box 要素全体に広がるようにします。

  - border-color: 枠線の色を薄くします。

  - transition-delay: 0s;: 変化の遅延をなくします。

  - border-radius: 10px;: 角を丸くします。

- .box:hover: box 要素にマウスが乗ったときのスタイルです。

  - background: rgba(255, 255, 255, 0.1);: 半透明の白い背景を追加します。

  - backdrop-filter: blur(15px);: 背景にある要素をぼかす効果（すりガラスのような効果）を追加します。

  - transition-delay: 0.3s;: 変化の遅延を設定します。

  - border-radius: 10px;: 角を丸くします。

<h1>JavaScript: ウェブページに動きを加える</h1>
JavaScriptファイル (script.jsなど) は、ウェブページの動的な振る舞いを制御します。
 
 * const todoInput = document.getElementById("todoInput");: HTMLでid="todoInput"が設定された入力欄要素を取得し、todoInputという定数に代入します。
 
 * const addTodoButton = document.getElementById("addTodoButton");: HTMLでid="addTodoButton"が設定されたボタン要素を取得し、addTodoButtonという定数に代入します。
 
 * const todoList = document.getElementById("todoList");: HTMLでid="todoList"が設定されたul要素（Todoリストが表示される場所）を取得し、todoListという定数に代入します。

<h3>タスク追加機能</h3>

- addTodoButton.addEventListener("click", () => { ... });: 「追加」ボタンがクリックされたときに実行される処理を設定します。

  - const todoText = todoInput.value.trim();: 入力欄 (todoInput) の値を取得し、trim()メソッドで前後の空白を削除して todoText に代入します。

  - if (todoText !== "") { ... }: todoText が空でない（何も入力されていない）場合にのみ、以下の処理を実行します。

    - const listItem = document.createElement("li");: 新しい<li>要素（リスト項目）を作成します。

    - const todoSpan = document.createElement("span");: タスクのテキストを表示するための新しい<span>要素を作成します。

    - todoSpan.textContent = todoText;: <span>要素の中に、入力されたタスクのテキストを設定します。

    - listItem.appendChild(todoSpan);: 作成した<span>要素を<li>要素の子要素として追加します。

    - const deleteButton = document.createElement("button");: 削除ボタン用の新しい<button>要素を作成します。

    - deleteButton.textContent = "削除";: 削除ボタンのテキストを「削除」に設定します。

    - deleteButton.classList.add("delete-button");: 削除ボタンに delete-button という CSS クラスを追加し、CSS でスタイルが適用されるようにします。

    - deleteButton.addEventListener("click", () => { todoList.removeChild(listItem); });: 削除ボタンがクリックされたときに実行される処理を設定します。親の todoList（<ul>要素）から、この削除ボタンが属する listItem（<li>要素）を削除します。

    - listItem.appendChild(deleteButton);: 作成した削除ボタンを<li>要素の子要素として追加します。

    - todoSpan.addEventListener("click", () => { listItem.classList.toggle("completed"); });: タスクのテキスト部分（todoSpan）がクリックされたときに実行される処理を設定します。listItem に completed という CSS クラスを追加したり削除したりします。これにより、CSS で定義された「完了済み」のスタイルが適用されたり解除されたりします。

    - todoList.appendChild(listItem);: 作成した<li>要素を、HTML の todoList（<ul>要素）の最後に追加します。

    - todoInput.value = "";: タスクを追加した後、入力欄を空にします。

<h3>Enterキーでのタスク追加機能</h3>
 
 * todoInput.addEventListener("keypress", (event) => { ... });: 入力欄 (todoInput) でキーが押されたときに実行される処理を設定します。
   
   * if (event.key === "Enter") { ... }: 押されたキーが「Enter」キーであるかどうかを確認します。

- addTodoButton.click();: Enter キーが押されたら、「追加」ボタンがクリックされたのと同じ動作を実行します。

<h1>【まとめ】</h1>
このTodoリストは、入力されたタスクを追加し、各タスクを完了済みとしてマークしたり、削除したりできる基本的な機能を提供しています。HTMLで構造を作り、CSSで見た目を整え、JavaScriptで動きを加えるという、ウェブ開発の基本的な流れに沿って作られています。
