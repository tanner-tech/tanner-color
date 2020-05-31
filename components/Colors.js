import styled from "styled-components";
import ColorItem from "./ColorItem";

const Colors = ({ boxes, handleSaveAdd, handleCopyClick }) => {
    return (
        <ColorsContainer>
            { boxes.map((color, index) => (
                <ColorItem handleCopyClick = { handleCopyClick } handleSaveAdd  = { handleSaveAdd } boxColor = { color } key = { index } id = { index } />
            )) }
        </ColorsContainer>
    )
}

const ColorsContainer = styled.div`
    margin-top: 2.5vh;
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1vh 1fr 1vh 1fr 1vh 1fr 1vh 1fr;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1vh;
    width: 100%;
    height: calc(80vh - 2.5vh);
    @media(max-width: 768px) {
        grid-gap: 2.5vh;
        -ms-grid-columns: 1fr 2.5vh 1fr;
        grid-template-columns: repeat(2, 1fr);
        height: calc(((100vw - 10vw - 10vw) / 2) * 5 + 2.5vh * 6);
        margin-bottom: 2vh;
    }
    @media(width: 1024px) {
        grid-gap: 2.5vh;
        -ms-grid-columns: 1fr 2.5vh 1fr 2.5vh 1fr;
        grid-template-columns: repeat(3, 1fr);
        height: calc(((100vw - 10vw - 10vw) / 3) * 4 + 2.5vh * 4);
        margin-bottom: 2vh;
    }
`;

export default Colors;