import React from 'react'
import { RarityScaleContainer, RarityScaleBg, RarityScaleContent, RarityScaleRow,
        RarityScaleColumn, ColumnContent, RarityScaleH1, FlexboxRarityScaleContainer,
        Progress, ProgressValue, RarityFlexContainer, RarityColumnContent, Img } from './RarityScaleElements'

import img from '../../image/acquirepanda3.PNG'

const RarityScale = () => {
  return (
    <RarityScaleContainer>
        <RarityScaleBg>

        </RarityScaleBg>

        <RarityScaleContent>
            <RarityScaleRow>
                <RarityScaleColumn>
                    <FlexboxRarityScaleContainer>

                        <ColumnContent>
                            <RarityScaleH1>
                                Cool
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value"></div>
                            </div>
                            <RarityScaleH1>
                                2400 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <RarityScaleH1>
                                Cooler
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value2"></div>
                            </div>
                            <RarityScaleH1>
                                2000 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <RarityScaleH1>
                                Wild
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value3"></div>
                            </div>
                            <RarityScaleH1>
                                1700 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <RarityScaleH1>
                                Exotic
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value4"></div>
                            </div>
                            <RarityScaleH1>
                                1400 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <RarityScaleH1>
                                Epic
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value5"></div>
                            </div>
                            <RarityScaleH1>
                                1100 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <RarityScaleH1>
                                Elite
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value6"></div>
                            </div>
                            <RarityScaleH1>
                                800 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        

                        <ColumnContent>
                            <RarityScaleH1>
                                Legendary
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value7"></div>
                            </div>
                            <RarityScaleH1>
                                500 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        <ColumnContent>
                            <RarityScaleH1>
                                Pandas
                            </RarityScaleH1>
                            <div className="progress">
                            <div className="progress-value8"></div>
                            </div>
                            <RarityScaleH1>
                                100 Pandas
                            </RarityScaleH1>
                        </ColumnContent>
                        
                        


                        
                    </FlexboxRarityScaleContainer>

                    <RarityFlexContainer>
                        <RarityColumnContent>
                            <Img src={img}/>
                        </RarityColumnContent>
                    </RarityFlexContainer>
                </RarityScaleColumn>
            </RarityScaleRow>
        </RarityScaleContent>
    </RarityScaleContainer>
  )
}

export default RarityScale