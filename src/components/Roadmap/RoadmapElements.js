import styled from "styled-components";
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'

export const RoadmapContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;
    overflow-x: scroll;

    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const RoadmapBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const RoadmapContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RoadmapRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RoadmapColumn = styled.div`
    padding: 5vh;
`

export const FlexboxRoadmapContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    padding: 5vh;
`

export const ColumnContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5vh;
    width: 30vw;
`

export const ColumnContent2 = styled.div`
    display: flex;
    align-items: center;
    padding: 0vh;
    width: 70vw;
    height: 5vw;
`

export const RoadmapH1 = styled.h1`
    font-size: 2vh;
    color: white;
`


export const Img = styled.img`
    position: relative;
    height: 500px;
    width: 1500px;
    display: flex;
    justify-content: center;
    align-self: center;
`