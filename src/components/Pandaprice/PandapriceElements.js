import styled from "styled-components"
import roboto from '../../font/Roboto-Light.ttf'
import league from '../../font/LeagueSpartan-Bold.otf'

export const PandaContainer = styled.div`
    background: #1b1919;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: 100vh;
    position: relative;
    z-index: 1;
    align-items: center;

    

    @font-face {
        font-family: roboto;
        src: url(${roboto});
    }

    @font-face {
        font-family: league;
        src: url(${league});
    }
`

export const PandaBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const PandaContent = styled.div`
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
    top: 4vh;
`

export const PandaRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PandaColumn = styled.div`
    padding: 5vh;
`

export const FlexboxPandaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
    align-content: space-between;
    padding: 5vh;
    padding-right: 25vh;
    padding-left: 25vh;
    width: 100vw;
    

    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
        padding: 5vh;
        padding-right: 15vh;
        padding-left: 15vh;
        
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
        
        padding: 5vh;
        padding-right: 5vh;
        padding-left: 5vh;
   
    }

    @media screen and (max-width:464px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
        width: 100%;
        padding: 5vh;
        padding-right: 5vh;
        padding-left: 5vh;
    }
    
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
   
    width: 50%;
    padding: 5vh;

    @media screen and (max-width:1024px){
        width: 100%;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }

    @media screen and (max-width:468px){
        width: 100%;
    }
`

export const ColumnContent2 = styled.div`
    flex-wrap: wrap;
    justify-content: center;
   
    width: 50%;
    padding: 5vh;
    @media screen and (max-width:1024px){
        width: 100%;
    }

    @media screen and (max-width:768px){
        width: 100%;
    }

    @media screen and (max-width:468px){
        width: 100%;
    }
`

export const PandaH1 = styled.h1`
    font-family: league;
    font-size: 2vw;
    color: white;
`

export const PandaP = styled.p`
    font-family: roboto;
    font-size: 2vh;
    color: white;
`

export const PandaFlexContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;
`

export const PandaColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    position: relative;
    height: 500px;
    width: 500px;
    display: flex;
    justify-content: center;
    align-self: center;
`
