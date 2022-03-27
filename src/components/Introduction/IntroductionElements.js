import styled from "styled-components"
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import league from '../../font/LeagueSpartan-Bold.otf'


export const IntroductionContainer = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
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

    @font-face {
        font-family: league;
        src: url(${league});
    }
    
`

export const IntroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 110%;
    overflow: hidden;
    z-index: 0;
`

export const IntroContent = styled.div`
    z-index: 0;
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;


    @media screen and (max-width:468px){
        padding: 0vh;
    }
    
`

export const IntroRow = styled.div`
    display: flex;
    align-items: center;
`

export const IntroColumn = styled.div`
    padding: 5vh;
`

export const FlexboxIntroContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
    

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

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: flex-start;

    width: 80vh;
    padding: 4vh;

    @media screen and (max-width:1366px){
        width: 45vw;
    }

    @media screen and (max-width:1024px){
        width: 70vw;
    }
   
    @media screen and (max-width:768px){
        width: 70vw;
    }
    
    @media screen and (max-width:468px){
        width: 80vw;
    }
`

export const ColumnContent2 = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 0vh;
`

export const IntroH1 = styled.h1`
    font-family: league;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    font-size: 5vh;
    letter-spacing: .2vh;
    margin-bottom: 4vh;
    z-index: 1;
    text-transform: uppercase;
    text-shadow: 1px 1px 8px #000;
    text-align: left;

    @media screen and (max-width:1024px){
        text-align: left;
        justify-content: flex-start;
        font-size: 3vh;
    }

    @media screen and (max-width:768px){
        text-align: left;
        justify-content: flex-start;
    }
`
export const IntroP = styled.p`
    font-family: roboto;
    color: #fff;
    display: flex;
    justify-content: flex-start;
    font-size: 2vh;
    letter-spacing: .2vh;
    line-height: 2.5vh;
    text-shadow: 2px 2px 8px #000;
    text-align: left;

    @media screen and (max-width:1024px){
        text-align: left;
        justify-content: flex-start;
        font-size: 2vh;
    }

    @media screen and (max-width:768px){
        text-align: left;
        justify-content: flex-start;
    }
`


export const Img = styled.img`
    position: relative;
    height: 30vw;
    width: auto;
    display: flex;
    justify-content: center;
    align-self: center;

    @media screen and (max-width:1629px){
        height: 40vw;
    }

    @media screen and (max-width:1366px){
        height: 40vw;
    }

    @media screen and (max-width:1024px){
        height: 40vw;
    }

    @media screen and (max-width:768px){
        height: 50vw;
    }

    @media screen and (max-width:468px){
        height: 60vw;
    }
`

export const ImgBg = styled.img`
    position: relative;
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
`