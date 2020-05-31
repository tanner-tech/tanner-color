import styled, { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import favicon from '../favicon.png'
import HomeNavbar from '../components/HomePage/HomeNavbar';

const GLobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
    button {
        cursor: pointer;
        outline: none;
    }
`;

const Layouts = ({ children }) => {
    return (
        <div>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/png" href={ favicon } />
            </Head>
            <HomeNavbar />
            <GLobalStyles />
            <BodyContainer>
                { children }
            </BodyContainer>
        </div>
    )
}

const BodyContainer = styled.div`
    padding-top: 7.5vh;
    @media(max-width: 768px) {
        padding-top: 12.5vh;
    }
`;

export default Layouts;