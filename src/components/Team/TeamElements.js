import styled from "styled-components"
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'


export const TeamContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    z-index: 1;
    align-items: center;

    @font-face {
        font-family: orbitron;
        src: url(${orbitron});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const TeamBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const TeamContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 4vh;

    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const TeamRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TeamColumn = styled.div`
    padding: 5vh;
`

export const FlexboxTeamContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 90vw;
    padding: 5vh;

    @media screen and (max-width:1024px){
        width: auto;
    }

    @media screen and (max-width:768px){
        width: auto;
    }
`

export const ColumnContent = styled.div`
    height: auto;
`

export const TeamH1 = styled.div`
    font-family: roboto;
    font-size: 2vh;
    text-align: center;
    color: white;
`

export const Img = styled.img`
    position: relative;
    height: auto;
    width: 17vw;
    padding: 0vh;
    display: flex;
    justify-content: center;
    align-self: center;
    background: linear-gradient(#67d1e9 10%, #006a7b, 50%, #00404e 100%);
    -webkit-clip-path: circle(50% at 50% 50%);

    @media screen and (max-width:768px){
        width: 40vw;
    }

    @media screen and (max-width:468px){
        width: 70vw;
    }
`
