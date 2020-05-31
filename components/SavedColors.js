import SavedColorItem from "./SavedColorItem";
import styled from "styled-components";
import { useState, useRef, useEffect } from 'react';

const SavedColors = ({ handleCopyClick, savedColors, handleSaveRemove, colorContRef }) => {
    return (
        <SavedColorContainer>
            <Container ref = { colorContRef }>
                { savedColors.map((color, index) => (<SavedColorItem handleCopyClick = { handleCopyClick } handleSaveRemove = { handleSaveRemove } key = { index + 100 } saveColor = { color } id = { index } />)) }
            </Container>
        </SavedColorContainer>
    )
}

const SavedColorContainer = styled.div`
    width: 85%;
    overflow: hidden;
    @media(max-width: 768px) {
        overflow: scroll;
        overflow-scrolling: touch;
        width: 100%;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        height: 7.5vh;
        &::-webkit-scrollbar {
            -ms-overflow-style: none;
                display: none;
        }
    }
    @media(width: 1024px) {
        font-size: 18px;
        width: 75%;
        height: 7.5vh;
        overflow: scroll;
        overflow-scrolling: touch;
        &::-webkit-scrollbar {
            -ms-overflow-style: none;
                display: none;
        }
    }
`;
const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    height: 99%;
    -webkit-transition: -webkit-transform 250ms ease-in-out;
    transition: -webkit-transform 250ms ease-in-out;
    -o-transition: transform 250ms ease-in-out;
`;

export default SavedColors;