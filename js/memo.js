
    //1.Save クリックイベント

    $("#save").on("click", function () {
        const key = $("#title").val();
        const value = $("#text").val();
  
        localStorage.setItem(key, value);
        const html = `
        <li>
          <p>${key}</p>
          <p>${value}</p>
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
        <li>
          <p class='title'>${key}</p>
          <p class='text'>${value}</p>
        </li>
      `;
        $("#list").append(html);
      }
  