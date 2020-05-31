import styled from "styled-components";
import Customize from "../../Customize";
import Colors from '../../Colors';
import { useState, useEffect } from 'react';

//Color
const MainSection = () => {
    const [ boxes, setBoxes ] = useState([]);
    const [ savedColors, setSaveColor ] = useState([]);
    const [ copySucc, setCopySucc ] = useState(false);
    useEffect(() => {
        generate();
    }, []);
    const handleCopyClick = (val) => {
        navigator.clipboard.writeText(val).then(function() {
            setCopySucc(true);
            setTimeout(() => setCopySucc(false), 1000);
        }, function(err) {
            setCopySucc(true);
        });
    }
    const handleSaveAdd = id => {
        setSaveColor([...savedColors, boxes[id]]);
    };
    const handleSaveRemove = id => {
        const filteredArr = [ ...savedColors ];
        filteredArr.splice(id, 1);
        setSaveColor(filteredArr);
    };
    const generate = () => {
        let colorArr = [];
        for(let i = 0; i < 10; i++) {
            colorArr[i] = getColor();
        }
        setBoxes(colorArr);
    }
    const getColor = () => {
        var letters = '0123456789ABCDEF';
        var color = '#';
        var rgb = [];
        let num = 0, count = 16;
        for (let i = 0; i < 6; i++) {
            let char = letters[Math.floor(Math.random() * 16)];
            color += char;
            num += converToDec(char) * count;
            count = 1
            if(i % 2 == 1) {
                rgb[(i - 1) / 2] = num;
                num = 0;
                count = 16;
            }
        }
        return {
            rgb,
            color
        };
    }
    return (
        <HomePage>
            <Notification copySucc = { copySucc }>Copied to clipboard!</Notification>
            <Customize handleCopyClick = { handleCopyClick } handleSaveRemove = { handleSaveRemove } savedColors = { savedColors } generate = { generate } />
            <Colors handleCopyClick = { handleCopyClick } handleSaveAdd = { handleSaveAdd } boxes = { boxes } />
        </HomePage>
    )
}

const converToDec = (val) => {
    switch(val) {
        case "A":
            return 10;
        case "B":
            return 11;
        case "C":
            return 12;
        case "D":
            return 13;
        case "E":
            return 14;
        case "F":
            return 15;
        default:
            return parseInt(val);
    }
}

const HomePage = styled.div`
    width: 90%;
    margin: auto;
    padding-top: 5vh;
    z-index: 0;
    position: relative;
`;
const Notification = styled.div`
    opacity: ${props => props.copySucc ? 1 : 0};
    -webkit-transition: opacity 150ms ease-in-out;
        -o-transition: opacity 150ms ease-in-out;
            transition: opacity 150ms ease-in-out;
    position: absolute;
    top: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    border-radius: 4px;
    margin: 1vh;
    background: #6c63ff;
    padding: 1vh;
    color: #f2f2f2;
    overflow: hidden;
    @media(max-width: 768px) {
        padding: 2vw;
        margin-top: 1vw;
        width: 60%;
        text-align: center;
    }
`;

export default MainSection;