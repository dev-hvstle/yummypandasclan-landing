import styled from "styled-components"
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import league from '../../font/LeagueSpartan-Bold.otf'

export const MintafterContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    z-index: 1;
    align-items: center;

    @font-face {
        font-family: league;
        src: url(${league});
    }

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }
`

export const MintafterBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const MintafterContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 5vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 5vh;

    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const MintafterRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const MintafterColumn = styled.div`
    padding: 5vh;
`

export const FlexboxMintafterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    width: 80vw;

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
        
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
    }
`

export const MintafterH1 = styled.h1`
    text-align: center;
    font-family: league;
    font-size: 2vw;
    color: white;
    text-transform: uppercase;
    padding-bottom: 5vh;

    @media screen and (max-width:1366px){
        font-size: 4vw;
    }

    @media screen and (max-width:1024px){
        font-size: 4vw;
    }

    @media screen and (max-width:768px){
        font-size: 6vw;
    }

    @media screen and (max-width:468px){
        font-size: 6vw;
    }
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2vh;
`

export const MintAfterH2 = styled.h1`
   
    font-family: league;
    font-size: 4vh;
    color: #f7d020;
    text-align: center;
    text-transform: uppercase;
    padding-bottom: 2vh;
`

export const MintAfterP = styled.p`
    font-family: roboto;
    font-size: 2vh;
    color: white;
    text-align: center;
`