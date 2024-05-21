
//1.Save クリックイベント

$("#save").on("click", function () {
  const key = $("#title").val();
  const value = $("#text").val();

  localStorage.setItem(key, value);
  const html = `
     
        <li class="list-item" data-key="${key}">
        <div class='list-flex'>
        <input type="checkbox" id="checkbox">
       <div class='list-wrapper'>
       
          <p>${key}</p>
         
          <p>${value}</p>
          </div>
          </div>
        </li>
      `;
  $("#list").append(html);
});



//2.clear クリックイベント
$("#clear").on("click", function () {
  localStorage.clear();
  $("#list").empty();
});





//3.ページ読み込み：保存データ取得表示
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  const html = `
        <li class="list-item" data-key="${key}">
        <div class='list-flex'>
        <input type="checkbox" class="delete-checkbox">
        <div class='list-wrapper'>
          <p class='title'>${key}</p>
          <p class='text'>${value}</p>
          </div>
          </div>
        </li>
      `;
  $("#list").append(html);
}


// チェックボックスの変更イベント
$("#list").on("change", ".delete-checkbox", function () {
if ($(this).is(":checked")) {
 
 const listItem = $(this).closest("li");
 
 const key = listItem.attr("data-key");

 setTimeout(function() {
 localStorage.removeItem(key);

listItem.remove();
}, 500); 
}
 });