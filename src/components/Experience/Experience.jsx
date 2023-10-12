import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from '../Cards/ExperienceCard';
import { experiences } from '../../data/constants';
import { Container, Wrapper, Title, Desc, TimelineSection } from "./ExperienceStyle"


const Experience = () => {
    return (
        <Container id="experience">
            <Wrapper>
                {/* Experience title and desription */}
                <Title>Experience</Title>
                <Desc>
                    My work experience as a software engineer and working on different companies and projects.
                </Desc>

                {/* Experience card container */}
                <TimelineSection>
                    <Timeline>
                        {experiences.map((experience, index) => (
                            <TimelineItem key={Math.random()}>
                                <TimelineSeparator key={Math.random()}>
                                    <TimelineDot variant="outlined" color="secondary" key={Math.random()}/>
                                    {
                                        index !== experiences.length && <TimelineConnector style={{ background: '#854CE6' }} key={Math.random()}/>
                                    }
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }} key={Math.random()}>
                                    {/* Experience card component */}
                                    <ExperienceCard experience={experience} key={Math.random()}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>

                </TimelineSection>
            </Wrapper>
        </Container>
    )
}

export default Experience