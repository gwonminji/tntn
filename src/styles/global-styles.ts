import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      :root {
        --color-blue: #0047ab;
        --color-lightblue: #f0f8ff;
        --color-white: #fff;
        --color-whitesmoke: #f4f4f4;
        --color-babypowder: #fefefa;
        --color-black: #222;
        --color-gray: #999;
        --color-lightgray: #e5e4e2;

        --vh: 100%;
        --vh-100: calc(var(--vh, 1vh) * 100);
      }
      ${reset}
      * {
        box-sizing: border-box;
      }
      body{
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-size: 16px;
        color: #333;
      }
      a{
        text-decoration: none;
      }
      button{
        padding: 0;
        border: 0;
        background: transparent;
        cursor: pointer;
      }
    `;
export default GlobalStyle;
