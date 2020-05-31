import styled from "styled-components";
import SavedColors from './SavedColors';
import { useRef, useState } from 'react';

const Customize = ({ handleCopyClick, generate, savedColors, handleSaveRemove }) => {
    const colorContRef = useRef(null);
    const [ counter, setCounter ] = useState(0);
    const [ totalSaveColors ] = useState(7);
    const handleNextClick = () => {
        let count = counter + 1;
        if(count > savedColors.length - totalSaveColors) return;
        colorContRef.current.style.transform = `translateX(${count * 14.29}%)`;
        setCounter(counter + 1);
    }
    const handlePrevClick = () => {
        let count = counter - 1;
        if(count < 0) return;
        colorContRef.current.style.transform = `translateX(${count * 14.29}%)`;
        setCounter(counter - 1);
    }
    return (
        <CustomizeContainer>
            { savedColors.length > totalSaveColors ? <NavButton onClick = { handlePrevClick }>&lt;</NavButton> : <NavButton></NavButton> }
            <SavedColors colorContRef = { colorContRef } handleCopyClick = { handleCopyClick } handleSaveRemove = { handleSaveRemove } savedColors = { savedColors } />
            { savedColors.length > totalSaveColors ? <NavButton onClick = { handleNextClick }>&gt;</NavButton> : <NavButton></NavButton> }
            <GenerateBtn onClick={ generate }>Generate</GenerateBtn>
        </CustomizeContainer>
    )
}

const CustomizeContainer = styled.nav`
    width: 100%;
    height: 7.5vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    @media(max-width: 768px) {
        width: 100%;
        display: block;
        height: 12.5vh;
    }
`;
const NavButton = styled.button`
    font-size: 150%;
    background: none;
    border: none;
    font-weight: bold;
    width: 2.5%;
    height: 100%;
    @media(max-width: 768px) {
        display: none;
    }
    @media(width: 1024px) {
        display: none;
    }
`;
const GenerateBtn = styled.button`
    background: #6c63ff;
    color: #f2f2f2;
    border-radius: 4px;
    border: none;
    padding: 1vh 0;
    width: 10%;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
    @media(max-width: 768px) {
        font-size: 16px;
        width: 100%;
    }
    @media(width: 1024px) {
        font-size: 18px;
        width: 20%;
    }
`;

export default Customize;