import React from 'react'
import { FooterContainer, FooterBg, FooterContent,
    FooterRow, FooterColumn, FlexboxContainer,
    FlexboxContent, FlexboxContent2, Socials, SocialImg,
    FooterH1, SocialLinks } from './FooterElements'

import twitter from '../../image/Twitter.png'
import discord from '../../image/discord.png'
import OpenSea from '../../image/opensea.png'
import instagram from '../../image/instagram.png'
const Footer = () => {
  return (
        <FooterContainer>
            <FooterBg>

            </FooterBg>

            <FooterContent>
                <FooterRow>
                    <FooterColumn>
                        <FlexboxContainer>

                            <FlexboxContent2>
                          
                                
                                <FooterH1>Contact Us</FooterH1>
                            
                          
                            </FlexboxContent2>

                            <FlexboxContent>
                                <Socials>
                                
                                <SocialLinks href="/"  rel="noopener">
                                    <SocialImg src={OpenSea} />
                                </SocialLinks>
                                
                                
                                <SocialLinks href="/"  rel="noopener">
                                    <SocialImg src={twitter} />
                                </SocialLinks>
                                
                                
                                <SocialLinks href="/"  rel="noopener">
                                    <SocialImg src={discord} />
                                </SocialLinks>
                                
                                
                                <SocialLinks href="/"  rel="noopener">
                                    <SocialImg src={instagram} />
                                </SocialLinks>
                                
                                

                                
                                
                                
                                
                                </Socials>
                            </FlexboxContent>
                        </FlexboxContainer>
                    </FooterColumn>
                </FooterRow>
            </FooterContent>
        </FooterContainer>
  )
}

export default Footer