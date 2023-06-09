import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont,  'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-y: overlay;
  overflow-x: overlay;
  

  /* background:#ebeef3; */
  /* background:#ffe1e5; */
  /* background:#f5f5f5; */

}

body.modal-open {
  overflow: hidden;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  margin: 0;
  padding: 0;
  font-family: inherit;
  cursor: pointer;
}
a {
   text-decoration: none;
   
}

   ::-webkit-scrollbar {
      width: 10px;
      
    }
    ::-webkit-scrollbar-track {
      border-radius: 12px;
      margin-left: 10px;
      background-color: #ffffff;
      
    }
    ::-webkit-scrollbar-thumb {
      background-color: #dce3e5cc;
      border-radius: 12px;
      margin-left: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: #feafe5;
    }



`;
