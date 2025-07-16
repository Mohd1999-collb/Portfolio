import React from 'react'
import { useState } from 'react'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                {/* Project titles and description */}
                <Title>Projects</Title>
                <Desc>
                    I have worked on a wide range of projects. Here are some of my projects.
                </Desc>

                {/* Toggle Button group */}
                <ToggleButtonGroup >
                    {toggle === 'all' ?
                        <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
                    }
                    <Divider />

                    {toggle === 'web app' ?
                        <ToggleButton active value="web app" onClick={() => setToggle('web app')}>Frontend</ToggleButton>
                        :
                        <ToggleButton value="web app" onClick={() => setToggle('web app')}>Frontend</ToggleButton>
                    }
                    <Divider />

                    {toggle === 'backend' ?
                        <ToggleButton active value="backend" onClick={() => setToggle('backend')}>Backend</ToggleButton>
                        :
                        <ToggleButton value="backend" onClick={() => setToggle('backend')}>Backend</ToggleButton>
                    }
                    {/* <Divider /> */}

                    {/* {toggle === 'machine learning' ?
                        <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                        :
                        <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                    } */}
                </ToggleButtonGroup>

                {/* Project card container */}
                <CardContainer>
                    {/* for all projects */}
                    {toggle === 'all' && projects
                        .map((project) => (
                            // Project card component
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={Math.random()}/>
                        ))}
                    
                    {/* for filter projects */}
                    {projects
                        .filter((item) => item.category === toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} key={Math.random()}/>
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects