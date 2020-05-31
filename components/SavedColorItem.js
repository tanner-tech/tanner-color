import styled, { keyframes } from "styled-components";
import { useState } from 'react';

const SavedColorItem = ({ handleCopyClick, saveColor, id, handleSaveRemove }) => {
    const [ mouseHandle, setMouseHandle ] = useState(false);
    const handleMouseMove = (val) => {
        setMouseHandle(!mouseHandle);
    }
    return (
        <SavedItemContainer mouseHandle = { mouseHandle } boxColor = { saveColor.color } onMouseEnter = { handleMouseMove } onMouseLeave = { handleMouseMove }>
            <ColorCircle mouseHandle = { mouseHandle } boxColor = { saveColor.color }></ColorCircle>
            <CircleDetail mouseHandle = { mouseHandle }> { saveColor.color } </CircleDetail>
            <SaveOrDelete boxColor = { saveColor.color }>
                <CopyColor onClick = { handleCopyClick.bind(this, saveColor.color) } boxColor = { saveColor.color }>copy</CopyColor>
                <CloseBtn boxColor = { saveColor.color } onClick = { handleSaveRemove.bind(this, id) } handleSaveRemove = { handleSaveRemove }>&times;</CloseBtn>
            </SaveOrDelete>
        </SavedItemContainer>
    )
}

const add = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`
const SavedItemContainer = styled.div`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-width: 13%;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    margin: 0 0.642%;
    padding: 0.5vh;
    border: 2px solid ${props => props.boxColor};
    border-radius: 3.75vh;
    -webkit-animation: ${add} 250ms ease-in-out;
        animation: ${add} 250ms ease-in-out;
    @media(max-width: 768px) {
        min-width: 40%;
    }
    @media(width: 1024px) {
        min-width: 25%;
    }
`;
const ColorCircle = styled.div`
    opacity: ${props => props.mouseHandle ? 0 : 1};
    width: calc(3.75vh - 0.5vh);
    height: calc(3.75vh - 0.5vh);
    background: ${props => props.boxColor};
    border-radius: 50%;
    -webkit-transition: opacity 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out;
            transition: opacity 150ms ease-in-out;
`;
const CircleDetail = styled.p`
    opacity: ${props => props.mouseHandle ? 0 : 1};
    font-size: 16px;
    -webkit-transition: opacity 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out;
            transition: opacity 150ms ease-in-out;
`;
const SaveOrDelete = styled.div`
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out;
            transition: opacity 150ms ease-in-out;
    width: 100%;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-width: 13%;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -ms-flex-pack: distribute;
        justify-content: space-around;
    @media(max-width: 768px) {
        min-width: 40%;
    }
    &:hover {
        opacity: 1;
    }
`;
const CloseBtn = styled.button`
    background: none;
    border: none;
    font-size: 28px;
    color: ${props => props.boxColor};
    background: none;
    border: none;
    font-weight: bold;
`;
const CopyColor = styled.button`
    background: none;
    border: none;
    font-size: 16px;
    color: ${props => props.boxColor};
    background: none;
    border: none;
    font-weight: bold;
`;

export default SavedColorItem;