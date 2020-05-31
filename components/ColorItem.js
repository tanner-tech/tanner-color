import styled from "styled-components";
import save from '../images/save.png';
import { useState } from 'react';

const ColorItem = ({ boxColor, id, handleSaveAdd, handleCopyClick }) => {
    const [ mouseHandle, setMouseHandle ] = useState(false);
    const handleMouseEnter = () => {
        setMouseHandle(true);
    }
    const handleMouseLeave = () => {
        setMouseHandle(false);
    }
    return (
        <ColorItemContainer>
            <Box style={{ background: boxColor.color }} onMouseEnter = { handleMouseEnter } onMouseLeave = { handleMouseLeave }>
                    <RgbValue onClick = { handleCopyClick.bind(this, boxColor.rgb) } mouseHandle = { mouseHandle }>rgb({ boxColor.rgb[0] }, { boxColor.rgb[1] }, { boxColor.rgb[2] })</RgbValue>
                    <HexValue onClick = { handleCopyClick.bind(this, boxColor.color) }> { boxColor.color } </HexValue>
                    <SaveBtn onClick = { handleSaveAdd.bind(this, id) } mouseHandle = { mouseHandle }> <SaveIcon src={ save } alt=""/> </SaveBtn>
            </Box>
        </ColorItemContainer>
    )
}

const ColorItemContainer = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
`;
const Box = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
        align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    width: calc((100vw - 10vw - 10vw) / 5);
    height: calc((100vw - 10vw - 10vw) / 5);
    border-radius: 4px;
    -webkit-transition: background-color 250ms ease-in-out;
        -o-transition: background-color 250ms ease-in-out;
            transition: background-color 250ms ease-in-out;
    @media(max-width: 768px) {
        width: calc((100vw - 10vw - 10vw) / 2);
        height: calc((100vw - 10vw - 10vw) / 2);
    }
    @media(width: 1024px) {
        width: calc((100vw - 10vw - 10vw) / 3);
        height: calc((100vw - 10vw - 10vw) / 3);
    }
`
const HexValue = styled.p`
    color: #f2f2f2;
    font-weight: bold;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.2);
    padding: 1vh 1vw;
    border-radius: 4px;
    cursor: pointer;
`;
const RgbValue = styled.p`
    opacity: ${props => props.mouseHandle ? 1 : 0};
    color: #f2f2f2;
    font-weight: bold;
    font-size: 24px;
    background: rgba(0, 0, 0, 0.2);
    padding: 1vh 1vw;
    border-radius: 4px;
    margin-bottom: 1vh;
    -webkit-transition: opacity 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out;
            transition: opacity 150ms ease-in-out;
    cursor: pointer;
    @media(max-width: 768px) {
        font-size: 14px;
    }
`;
const SaveBtn = styled.button`
    opacity: ${props => props.mouseHandle ? 1 : 0};
    -webkit-transition: opacity 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out;
            transition: opacity 150ms ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    width: 2vw;
    height: 2vw;
    cursor: pointer;
    margin: 2.5%;
    background: #fff;
    border: none;
    border-radius: 4px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
        align-items: center;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    @media(max-width: 768px) {
        width: 5vw;
        height: 5vw;
        opacity: 1;
    }
    @media(width: 1024px) {
        opacity: 1;
        width: 3vw;
        height: 3vw;
    }
`;
const SaveIcon = styled.img`
    width: 2vw;
    height: 2vw;
    @media(max-width: 768px) {
        width: 4.5vw;
        height: 4.5vw;
    }
    @media(width: 1024px) {
        opacity: 1;
        width: 2.5vw;
        height: 2.5vw;
    }
`;

export default ColorItem;