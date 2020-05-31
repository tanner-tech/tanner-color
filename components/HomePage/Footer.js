import styled from "styled-components"

const Footer = () => {
    return (
        <FooterContainer>
            <SubFooter>
                <ListItem>Colors</ListItem>
                <ListItem>Linear Gradient</ListItem>
            </SubFooter>
            <RealFooter>
                <FooterLogo>...tanner</FooterLogo>
                <FooterPara> &copy; All right are reserved. </FooterPara>
            </RealFooter>
        </FooterContainer>
    )
}

const FooterLogo = styled.h1`
    font-size: 16px;
    font-family: 'Righteous', cursive;
    color: #6c63ff;
    text-align: center;
    margin-right: 1vw;
`;
const FooterPara = styled.p`
`;
const FooterContainer = styled.footer`
    height: 10vh;
    width: 100%;
`;
const SubFooter = styled.div`
    height: 50%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    list-style-type: none;
    background: #6c63ff;
`;
const ListItem = styled.li`
    color: #f2f2f2;
    font-weight: bold;
    @media(max-width: 768px) {
        font-size: 14px;
    }
`;
const RealFooter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    height: 50%;
    background: #f7f7f8;
    color: #333;
    @media(max-width: 768px) {
        font-size: 10px;
    }
`;
const Span = styled.span`
    font-weight: bold;
    margin-left: 1vh
`;

export default Footer;