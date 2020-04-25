import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    html, body {
        height: 100%;
        overflow-x: hidden;
    }

    #root {
        height: 100%;
    }

    body {
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
        background-color: #ffffff;
        font-size: 14px;
    } 

    a {
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
        margin:0;
        padding:0;
    }

    ::-webkit-scrollbar {
        width:6px;
    }
    
    ::-webkit-scrollbar-track {
        border-radius:5px;
        background:rgba(0,0,0,0.1);
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius:5px;
        background:rgba(0,0,0,0.2);
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background:rgba(0,0,0,0.4);
    }
    
    ::-webkit-scrollbar-thumb:window-inactive {
        background:rgba(0,0,0,0.05);
    }      

`;

export default GlobalStyles;
