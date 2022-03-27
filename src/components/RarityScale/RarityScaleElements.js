import styled from 'styled-components'
import orbitron from '../../font/Orbitron-Regular.ttf'
import roboto from '../../font/Roboto-Light.ttf'
import indigo from '../../font/IndigoRegular.otf'
import league from '../../font/LeagueSpartan-Bold.otf'

export const RarityScaleContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0 0px;
    height: auto;
    position: relative;
    z-index: 999;
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
        font-family: indigos;
        src: url(${indigo});
    }

    @font-face {
        font-family: league;
        src: url(${league});
    }
`

export const RarityScaleBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
`

export const RarityScaleContent = styled.div`
    max-width: 1200px;
    position: relative;
    padding: 2vh;
    padding-top: 5vh;
    padding-left: 5vh;
    padding-right: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    @media screen and (max-width:468px){
        padding: 0vh;
    }
`

export const RarityScaleRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const RarityScaleColumn = styled.div`
    padding: 5vh;
    padding-bottom: 0vh;
`

export const FlexboxRarityScaleContainer = styled.div`
    flex: wrap;
    justify-content: space-around;
    align-items: center;
    align-content: space-between;

`

export const ColumnContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    margin-bottom: 1vh;
   
`

export const RarityScaleH1 = styled.h1`
    font-size: 2vh;
    font-family: league;
    width: 15vh;
    
    @media screen and (max-width:468px){
        width: 10vh;
        font-size: 1.5vh;
    }
`



export const RarityFlexContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const RarityColumnContent = styled.div`
    flex-wrap: wrap;
    justify-content: center;
`

export const Img = styled.img`
    position: relative;
    width: 100vw;
    height: 100%;
    display: flex;
    justify-content: center;
    top: 5vh;
   
`