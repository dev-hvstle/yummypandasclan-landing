import React from 'react'
import { IntroductionContainer, IntroBg, 
    IntroContent, IntroRow, IntroColumn, FlexboxIntroContainer, ColumnContent,
    ColumnContent2, IntroH1, IntroP, Img, ButtonMoto, BtnContainer }
from './IntroductionElements'
import img from '../../image/coolpanda.JPG'

const Introduction = () => {
  return (
    <IntroductionContainer>
        <IntroBg>

        </IntroBg>.

        <IntroContent>
            <IntroRow>
                <IntroColumn>
                    <FlexboxIntroContainer>
                        
                        
                        <ColumnContent2>
                            <Img src={img} className="img"></Img>
                        </ColumnContent2>

                        <ColumnContent>
                            <IntroH1>
                            What are Cool Pandas?
                            </IntroH1>
                            <IntroP>
                            Cool Pandas is a collection of 5,000 randomly generated NFTs on the Ethereum Blockchain, assembled from over 150 unique hand-drawn traits. All the Pandas have a variety of outfits, faces, hats, and colors. Cool Pandas gives the holders the power to stake to earn tokens and to enjoy the extremely fun and interactive Panda NFT Game.
                             </IntroP>

                           
                            

                        </ColumnContent>
                    </FlexboxIntroContainer>
                </IntroColumn>
            </IntroRow>

        </IntroContent>
    </IntroductionContainer>
  )
}

export default Introduction