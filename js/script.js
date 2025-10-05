/* ドロワー開閉（jQuery）
 ************************************/
// jQuery("#js-drawer-icon").on("click", function(e){
//   e.preventDefault(); /* 標準の動作を停止（aタグなので、この場合はリンク遷移） */
//   jQuery(this).toggleClass("is-checked");
//   jQuery("#js-drawer-content").toggleClass("is-checked");
// })

/* ドロワー開閉（JavaScript）
 ************************************/

/* idがjs-drawer-iconの要素のオブジェクトを定数に格納 */
const drawerIcon = document.querySelector("#js-drawer-icon");

/* idがjs-drawer-contentの要素のオブジェクトを定数に格納 */
const drawerContent = document.querySelector("#js-drawer-content");

if (drawerIcon) {
  /* エラー処理（drawerIconが定義されているときのみ実行） */
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault(); /* 標準の動作を停止（aタグなので、この場合はリンク遷移） */

    drawerIcon.classList.toggle("is-checked");
    /* idが js-drawer-icon の要素に対して、is-checked クラスを付けたり外したり切り替える */
    drawerContent.classList.toggle(
      "is-checked"
    ); /* idが "#js-drawer-content" の要素に対して、is-checked クラスを付けたり外したり切り替える */
  });
}

/* QAセクション アコーディオン
 ************************************/
jQuery(".js-accordion").on("click", function (e) {
  e.preventDefault(); /* ブラウザ標準の動きを無効化 */

  /* 開いているとき（is-openクラスを持っているとき） */
  if (jQuery(this).parent().hasClass("is-open")) {
    /* is-openクラスを取り除いてアイコンを閉じる状態にする */
    jQuery(this).parent().removeClass("is-open");
    /* 回答部分を閉じる */
    jQuery(this).next().slideUp();
  } else {
    /* 閉じているとき（is-openクラスを持っていないとき） */
    /* is-openクラスを付与してアイコンを開く状態にする */
    jQuery(this).parent().addClass("is-open");
    /* 回答部分を開く */
    jQuery(this).next().slideDown();
  }
});

/* Swiper
 ************************************/
const swiper = new Swiper("#js-gallery-swiper", {
  // コンテンツの幅を設定（paddingと合わせる）
  spaceBetween: 82,

  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

/* modal(jQuery)
 ************************************/
/* 開くボタン押下時 */
// jQuery(".js-modal-open").on("click", function(e){
//   e.preventDefault();

//   /* モーダルを開く（dialogにopen属性付与） */
//   jQuery("#js-about-modal")[0].showModal();
// });

// /* 閉じるボタン押下時 */
// jQuery(".js-modal-close").on("click", function(e){
//   e.preventDefault();

//   /* モーダルを閉じる（dialogにopen属性解除） */
//   jQuery("#js-about-modal")[0].close();
// });

/* modal(javaScript)
 ************************************/

/* js-modal-openクラスを持つHTML要素をすべて取得 */
const modalOpenItems = document.querySelectorAll(".js-modal-open");
/* js-modal-closeクラスを持つHTML要素をすべて取得 */
const modalCloseItems = document.querySelectorAll(".js-modal-close");

/* モーダルのHTML要素を取得 */
const aboutModal = document.querySelector("#js-about-modal");

/* js-modal-openの要素がクリックされたらモーダルを表示させる */
modalOpenItems.forEach(function (modalOpenItem) {
  /* js-modal-openの要素にクリックイベントを登録 */
  modalOpenItem.addEventListener("click", function (e) {
    e.preventDefault();

    /* aboutModalがある場合 */
    if (aboutModal) {
      /* aboutModalを表示する */
      aboutModal.showModal();
    }
  });
});

/* js-modal-closeの要素がクリックされたらモーダルを非表示にする */
modalCloseItems.forEach(function (modalCloseItem) {
  /* js-modal-closeの要素にクリックイベントを登録 */
  modalCloseItem.addEventListener("click", function (e) {
    e.preventDefault();

    /* aboutModalがある場合 */
    if (aboutModal) {
      /* aboutModalを表示する */
      aboutModal.close();
    }
  });
});

/* スムーススクロール
 ************************************/
jQuery(`a[href^="#"]`).on("click", function (e) {
  /* aタグのhref属性の先頭が#の要素がクリックされたら */ const speed = 300;
  const id =
    jQuery(this).attr("href"); /* aタグのhref属性の値を取得（例：#about） */
  const target = jQuery(
    "#" == id ? "html" : id
  ); /* idの値が#ならjQuery("html")を、#じゃなければidの値（例：#about）を入れたjQuery("#about")をtargetに取得 */
  const position = jQuery(target).offset().top;

  jQuery("html, body").animate(
    {
      scrollTop: position, // スクロール先を指定
    },
    speed,
    "swing" // swing（ゆっくり→速く→ゆっくり） or linear（一定）
  );
});

/* ドロワー内リンクのクリック時処理 */
jQuery(`#js-drawer-content a[href^="#"]`).on("click", function (e) {
  /* js-drawer-contentの中にあるaタグのhref属性の先頭が#の要素がクリックされたら */

  jQuery("#js-drawer-icon").removeClass(
    "is-checked"
  ); /* ドロワーアイコンをPC表示にする */
  jQuery("#js-drawer-content").removeClass("is-checked"); /* ドロワーを閉じる */
});

/* スクロールに合わせてトップへ戻るボタンを表示
 ************************************/
/* jQuery */
/* スクロールを検知したら */
// jQuery(window).on("scroll", function () {
//   /* トップから100pxスクロールされたら */
//   if (100 < jQuery(window).scrollTop()) {
//     /* 「トップへ戻る」ボタンにis-showクラス追加 */
//     jQuery("#js-pagetop").addClass("is-show");
//   } else {
//     /* 「トップへ戻る」ボタンからis-showクラス削除 */
//     jQuery("#js-pagetop").removeClass("is-show");
//   }
// });

/* JavaScript */
/* 「トップへ戻る」ボタンのオブジェクト取得 */
const pageTop = document.querySelector("#js-pagetop");

/* スクロールを検知したら */
window.addEventListener("scroll", function (e) {
  /* トップから100pxスクロールされたら */
  if (100 < window.scrollY) {
    /* 「トップへ戻る」ボタンにis-showクラス追加 */
    pageTop.classList.add("is-show");
  } else {
    /* 「トップへ戻る」ボタンからis-showクラス削除 */
    pageTop.classList.remove("is-show");
  }
});

/* スクロールでフワッと表示
 ************************************/

/* 画面に見えるようになった要素を監視 */
const intersectionObserver = new IntersectionObserver(function (entries) {
  /* entries: 画面に出たり入ったりする要素 */
  entries.forEach(function (entry) {
    /* entry.isIntersectingで表示されたかどうかを判断 */
    if (entry.isIntersecting) {
      /* entry.isIntersecting:true = 表示された */
      /* is-in-viewクラスを付与して表示 */
      entry.target.classList.add("is-in-view");
    } else {
      /* entry.isIntersecting:false = 非表示になった */
      /* is-in-viewクラスを除いて非表示 */
      entry.target.classList.remove("is-in-view");
    }
  });
});

/* js-in-viewクラスを持つ全ての要素を取得 */
const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  /* １個ずつobserveに渡すことで、監視対象に登録 */
  /* 画面に入ったり出たりすると自動で処理が呼ばれる */
  intersectionObserver.observe(inViewItem);
});
