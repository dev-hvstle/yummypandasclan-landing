import React from 'react'
import { RoadmapContainer, RoadmapBg, RoadmapContent,
  RoadmapRow, RoadmapColumn, FlexboxRoadmapContainer,
  ColumnContent, ColumnContent2, RoadmapH1, Img} from './RoadmapElements'
import img from '../../image/roadmap.jpg'

const Roadmap = () => {
  return (
    <RoadmapContainer>
      <RoadmapBg>

      </RoadmapBg>
      <RoadmapContent>
        <RoadmapRow>
          <RoadmapColumn>
            <FlexboxRoadmapContainer>

              <ColumnContent>
                <RoadmapH1>ROADMAP</RoadmapH1>
              </ColumnContent>

              <ColumnContent2>
                <Img src={img}/>
              </ColumnContent2>
            </FlexboxRoadmapContainer>
          </RoadmapColumn>
        </RoadmapRow>
      </RoadmapContent>
    </RoadmapContainer>
  )
}

export default Roadmap