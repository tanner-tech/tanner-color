import styled from "styled-components";
import logo from '../../images/logo.png';

const HomeNavbar = () => {
    return (
        <Navbar>
            <LogoContainer>
                <Logo>...tanner<LogoSpan> | Colors</LogoSpan></Logo>
            </LogoContainer>
            <NavLinks>
                <NavItem>Colors</NavItem>
                <NavItem>Linear Graidient</NavItem>
            </NavLinks>
        </Navbar>  
    )
}

const Navbar = styled.nav`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100vw;
    height: 7.5vh;
    border-bottom: 0.5px solid #ccc;
    -webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
    position: fixed;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
        justify-content: space-between;
    background: #fff;
    z-index: 1;
`;
const LogoContainer = styled.div`
    width: 40%;
    @media(max-width: 768px) {
        width: 100%;
    }
`;
const Logo = styled.p`
    font-size: 36px;
    width: 100%;
    font-family: 'Righteous', cursive;
    color: #6c63ff;
    font-weight: bold;
    text-align: center;
`;
const LogoSpan = styled.span`
    font-weight: 100;
    color: #333;
`;
const NavLinks = styled.ul`
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    width: 30%;
    background: #fff;
    @media(max-width: 768px) {
        position: absolute;
        top: 7.5vh;
        left: 0;
        width: 100%;
        border-bottom: 0.5px solid #ccc;
        height: 5vh;
    }
`;
const NavItem = styled.li`

`;

export default HomeNavbar;