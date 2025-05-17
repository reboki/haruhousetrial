import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

 /* リセットCSS（必要なら） */
 *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* ベースフォント・背景 */
  body {
    font-family: 'Noto Sans JP', sans-serif;
    line-height: 1.6;
    background-color: #fff;
    color: #333;
  }

  /* スムーズスクロール */
  html {
    scroll-behavior: smooth;
  }

  #root{

  }

  /* レイアウト用ユーティリティ */
  .container {
    min-height: 100vh;
    margin: 0 auto;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  main {
    background-color: #faf3e0;
  }

`;
