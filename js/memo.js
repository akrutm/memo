
// localStorageからキーリストを取得
let keyList = JSON.parse(localStorage.getItem("keyList")) || [];

// localStorageからアイテムを取得してリストを再構築
function loadList() {

  // リストをクリアする
  $("#list").empty();

  keyList.forEach(key => {
    const value = localStorage.getItem(key);
    if (value !== null) {
      const html = `
      <li id="list-item" data-key="${key}">
        <div class='list-flex'>
          <input type="checkbox" class="delete-checkbox">
        <div class='list-wrapper'>
           <p>${key}</p>
           <p>${value}</p>
       </div>
        </div>
      </li>
      `;
      $("#list").append(html);
    }
  });
}
// 初回ロード時にリストを構築
loadList();


//1.Save クリックイベント

$("#save").on("click", function () {
  const key = $("#title").val().trim();
  const value = $("#text").val().trim();

  if (key && value) {
    if (!keyList.includes(key)) {
      keyList.push(key);
      localStorage.setItem("keyList", JSON.stringify(keyList));
    }

    localStorage.setItem(key, value);

    const html = `
     
      <li id="list-item" data-key="${key}">
        <div class='list-flex'>
          <input type="checkbox" class="delete-checkbox">
        <div class='list-wrapper'>
           <p>${key}</p>
           <p>${value}</p>
       </div>
        </div>
      </li>
      `;
    $("#list").append(html);


    $("#title").val('');
    $("#text").val('');
  }
});



//2.clear クリックイベント
$("#clear").on("click", function () {
  localStorage.clear();
  $("#list").empty();
});


// チェックボックスの変更イベント
$("#list").on("change", ".delete-checkbox", function () {
  if ($(this).is(":checked")) {

    const listItem = $(this).closest("li");

    const key = listItem.attr("data-key");

    // 0.5秒後に削除する
    setTimeout(function () {
      localStorage.removeItem(key);

      // keyListから該当のキーを削除
      keyList = keyList.filter(k => k !== key);
      localStorage.setItem("keyList", JSON.stringify(keyList));

      // リストアイテムを削除   
      listItem.remove();
    }, 500);



  }
});
