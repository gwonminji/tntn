import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      body{
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      }

      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }
    `;
export default GlobalStyle;
