import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;

    button{
        display: flex;    
        background: #C83967;
        border-radius: 5px;
        border: none;             
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        padding: 1rem 2rem;
        text-align: center;
        justify-content: center;
        max-width: 30rem;
        margin: 0 auto 2rem;

        h2 {
            font-size: 1.5rem;
        }
    }

    button:hover{    
        background: #EF9784; 
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    background-color: var(--white);
    color: var(--primary);
    -webkit-box-shadow: 0px 1px 23px -6px #000000; 
    box-shadow: 0px 1px 23px -6px #000000;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 1;

    h1 {
        font-family: 'Great Vibes', cursive;
        font-size: 2.5rem;
    }

    div {
        display: flex;
        align-items: center;

        nav {
            display: flex;
            gap: 2rem;
            margin-right: 2rem;
            font-size: 1.25rem;
            transition: 300ms;
        }
    }

    svg {
        font-size: 1.8rem;
        margin-left: 2rem;
    }

    svg:hover,
    a:hover {
        color: var(--secondary);
    }
`;

export const Banner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1.5rem 4rem;
    background-image: url("https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80");
    background-size: cover;
    background-repeat: no-repeat;
    background-position-y: center;
    
    
    width: 100vw;
    height: 35rem;

    div {
        h1 {
            color: var(--red);
            font-size: 3rem;
            font-weight: 500;
            padding-bottom: 24px;
        }
        
        a {
            background-color: var(--primary);
            color: var(--white);
            padding: 1.25rem 0.5rem;
            font-size: 1.5rem;
            border-radius: 4px;
            font-size: 1.5rem;
            font-weight: 700;
            transition: 300ms;

            span {
                border: 1px solid white;
                border-radius: 4px;
                padding: 0.75rem 2rem;
            }

            :hover {
                opacity: 0.9;
                -webkit-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
                -moz-box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
                box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);
            }
        }
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 4rem;
    
    h2 {
        font-size: 3rem;
        font-family: "josefin-sans", sans-serif;
        font-weight: 600;
        color: var(--black);
    }
`;


export const Highlights = styled.section`
    display: flexbox;
    align-items: center;
    gap: 3rem;
    justify-content: center;
    overflow-x: scroll;
    margin: 2rem 2rem 4rem ;
    padding-bottom: 1rem;

    ::-webkit-scrollbar {
        height: 4px; }

    ::-webkit-scrollbar-thumb {
        background-color: var(--secondary);
        border-radius: 25px;
    }
`;