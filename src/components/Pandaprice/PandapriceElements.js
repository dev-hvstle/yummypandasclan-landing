import styled from "styled-components"
import roboto from '../../font/Roboto-Light.ttf'
import league from '../../font/LeagueSpartan-Bold.otf'

export const PandaContainer = styled.div`
    background: #faffd7;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
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
    padding: 0vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

export const PandaRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const PandaColumn = styled.div`
    padding-right: 5vh;
    padding-left: 5vh;
`

export const FlexboxPandaContainer = styled.div`
    display: flex;
    justify-content: space-around;
    
    align-content: space-between;
    padding: 5vh;
    padding-right: 25vh;
    padding-left: 25vh;
    width: 100vw;
    
    @media screen and (max-width:1366px){
        flex-wrap: wrap;
        justify-content: space-around;
    
        align-content: space-between;
        padding: 5vh;
        padding-right: 5vh;
        padding-left: 5vh;
        
    }


    @media screen and (max-width:1024px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        padding: 5vh;
        padding-right: 5vh;
        padding-left: 5vh;
        
    }
    
    @media screen and (max-width:768px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        
        padding: 5vh;
        padding-right: 5vh;
        padding-left: 5vh;
   
    }

    @media screen and (max-width:468px){
        flex-wrap: wrap;
        justify-content: space-around;

        align-content: space-between;
        
        padding: 5vh;
        padding-right: 0vh;
        padding-left: 0vh;
   
    }


    
`

export const ColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
   
    width: 50%;
    padding: 5vh;
    padding-bottom: 0;

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
    color: #534741;
    padding-bottom: 2vh;

    @media screen and (max-width:1024px){
        font-size: 3vw;
    }

    @media screen and (max-width:768px){
        font-size: 3vw;
    }

    @media screen and (max-width:468px){
        font-size: 5vw;
    }


`

export const MintH1 = styled.h1`
    font-family: league;
    font-size: 2vh;
    color: #fff;
    text-align: center;
`

export const MintDetails = styled.h1`
    font-family: league;
    font-size: 2.5vh;
    color: #fff;
   
    text-align: center;
`

export const PandaP = styled.p`
    font-family: roboto;
    font-size: 2vh;
    color: #534741;
`

export const PandaFlexContainer = styled.div`
    display: flex;
    justify-content: center;
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
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;

    
`

export const PandaPFlexContainer = styled.div`
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

    @media screen and (max-width:468px){
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        align-content: space-between;
    }
`

export const PandaPContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #534741;
    padding: 2vh;
    border-radius: 10px;
    margin: 1vh;
`