import React from 'react'
import { MintafterContainer, MintafterBg, MintafterContent,
    MintafterRow, MintafterColumn, FlexboxMintafterContainer,
    MintafterH1, MintAfterH2,MintAfterP, ColumnContent } from './MintafterElements'

const Mintafter = () => {
  return (
    <MintafterContainer>
        <MintafterBg>

        </MintafterBg>

        <MintafterContent>
            <MintafterRow>
                <MintafterColumn>
                    <MintafterH1>
                        WHAT's next after Yummy Panda's Clan are sold out?
                    </MintafterH1>
                    <FlexboxMintafterContainer>
                        <ColumnContent>
                            <MintAfterH2>
                                Staking
                            </MintAfterH2>

                            <MintAfterP>
                            Send your Cool Pandas to work and earn $PND, the Metaverse’s most delicious token. It can be used in breeding, raising Baby Cool Pandas, and buying exclusive real-world merch.
                            </MintAfterP>
                        </ColumnContent>

                        <ColumnContent>
                            <MintAfterH2>
                                Game
                            </MintAfterH2>

                            <MintAfterP>
                            Panda is an NFT game that allows the user to experience fun and excitement by socializing with others through an expandable metaverse experience. Explore the unlimited possibilities by acquiring Cool Panda and join the fun now!
                            </MintAfterP>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <MintAfterH2>
                                Breeding
                            </MintAfterH2>

                            <MintAfterP>
                            Holders with two or more Cool Pandas can breed and create a new Generation 2 Baby Cool Panda. Baby Cool Pandas can be raised into kids or adults using the interactive PVE experience.
                            </MintAfterP>
                        </ColumnContent>
                    </FlexboxMintafterContainer>
                </MintafterColumn>
            </MintafterRow>
        </MintafterContent>
    </MintafterContainer>
  )
}

export default Mintafter