import React from 'react'
import { skills } from '../../data/constants'
import {Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillTitle, SkillList, SkillItem, SkillImage} from './SkillsStyle'

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        {/* Skill tittle and description */}
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.
        </Desc>

        {/* Skills card */}
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={Math.random()}>
              <SkillTitle key={Math.random()}>{skill.title}</SkillTitle> 
              <SkillList key={Math.random()}>
                {skill.skills.map((item) => (
                  <SkillItem key={Math.random()}>
                    <SkillImage src={item.image} key={Math.random()}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills