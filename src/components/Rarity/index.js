import React from 'react'
import { RarityContainer, RarityBg, RarityContent,
    RarityRow, RarityColumn, FlexboxRarityContainer,
    ColumnContent, ColumnContent2, RarityP, Img, RarityH1,
    ImgAnim, FlexContainer, ImgWrapper,
     } from './RarityElements'
import img1 from '../../image/rarity/1.png'
import img2 from '../../image/rarity/2.png'
import img3 from '../../image/rarity/3.JPG'
import img4 from '../../image/rarity/4.JPG'
import img5 from '../../image/rarity/5.JPG'
import img6 from '../../image/rarity/6.JPG'
import img7 from '../../image/rarity/7.JPG'
import img8 from '../../image/rarity/8.JPG'
import gif from '../../image/svganimation.GIF'

const Rarity = () => {
  return (
    <RarityContainer>
        <RarityBg>

        </RarityBg>

        <RarityContent>
            <RarityRow>
                <RarityColumn>
                        <RarityH1>
                            How Cool is my Panda?
                        </RarityH1>
                    <FlexboxRarityContainer>
                        <ColumnContent> 

                            
                            <RarityP>
                            All Pandas are hand-drawn with love and care, and all are cool, but some are cooler than others….and some are just bamboo. Each Panda can have up to 4 traits, from 8 different rarities. Common items like a tank top or sunglasses are less rare, while a UFO or dinosaur outfit is rarer. The rarity of a Panda determines how many $PND it can earn through staking.
                            </RarityP>
                        </ColumnContent>
                            
                        <ColumnContent2>
                            <ImgAnim src={gif} />
                        </ColumnContent2>
                    </FlexboxRarityContainer>
                    
                    <FlexContainer>
                        
                    
                        <ImgWrapper>
                            <Img src={img1} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img2} />
                        </ImgWrapper>
                    
                        <ImgWrapper>
                            <Img src={img1} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img2} />
                        </ImgWrapper>
                    
                        <ImgWrapper>
                            <Img src={img1} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img2} />
                        </ImgWrapper>
                    
                        <ImgWrapper>
                            <Img src={img1} />
                        </ImgWrapper>

                        <ImgWrapper>
                            <Img src={img2} />
                        </ImgWrapper>
                    
                     
                        
                        
                    </FlexContainer>


                </RarityColumn>
            </RarityRow>
        </RarityContent>
    </RarityContainer>
  )
}

export default Rarity