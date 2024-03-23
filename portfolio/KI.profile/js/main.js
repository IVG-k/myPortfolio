'use strict';
//ページトップへ戻るボタン
////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function () {
  //要素を取得
  const topBtn = document.querySelector('.page-top');
  //ウィンドウの高さを取得
  const windowHeight = window.innerHeight;
  //スクロール時の処理
  window.addEventListener('scroll', function () {
    //現在の垂直のスクロール位置がウィンドウの高さよりも大きい場合クラス属性値showを付与
    topBtn.classList.toggle('show', window.scrollY > windowHeight);
  });
  //クリック時の処理
  topBtn.addEventListener('click', function () {
    //ページのトップへ戻る
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return false;
  });
});