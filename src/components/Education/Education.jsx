import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';
import {Container, Wrapper, Title, Desc, TimelineSection} from "./EducationStyle"


const Education = () => {
  return (
    <Container id="education">
      <Wrapper>
        {/* Education title and descripion */}
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My educational details are as follows.
        </Desc>

        {/* Experience card container */}
        <TimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem key={Math.random()} >
                <TimelineContent sx={{ py: '12px', px: 2 }} key={Math.random()}>
                  {/* Education card component */}
                  <EducationCard education={education} key={Math.random()}/>
                </TimelineContent>
                <TimelineSeparator key={Math.random()}>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== education.length && <TimelineConnector style={{ background: '#854CE6' }} key={Math.random()}/>}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>

        </TimelineSection>
      </Wrapper>
    </Container>
  )
}

export default Education