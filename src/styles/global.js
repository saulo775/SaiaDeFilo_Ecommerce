import { createGlobalStyle } from "styled-components";


export const  GlobalStyles = createGlobalStyle`
    :root{
        --green: #8FC549;
        --red: #EA5766;
        --yellow: #FFFF81;
        --white: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px){
            font-size: 93,75%;
        }

        @media (max-width: 720px){
            font-size: 87,5%;
        }
    }

    body{
        -webkit-font-smooth: antialiased;
        font-family: 'Josefin Sans', sans-serif;
        color: var(--text-color);   
        background-color:#EEEEEE;     
    }

    h1, h2, h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h4, h5, h6, a, p {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
    }

    a{
        text-decoration: none;
        color: currentColor;
    }

    button, a {
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`
    