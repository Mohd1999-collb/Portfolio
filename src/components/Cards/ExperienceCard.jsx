import React from 'react'
import {Document, Description, Span, Card, Top, Image, Body, Role, Company, Duration, Skills, ItemWrapper, Skill} from "./ExperienceCardStyle"

const ExperienceCard = ({ experience }) => {
    return (
        <Card >
            {/* Card top details */}
            <Top>
                <Image src={experience.img}/>
                <Body >
                    <Role >{experience.role}</Role>
                    <Company >{experience.company}</Company>
                    <Duration >{experience.date}</Duration>
                </Body>
            </Top>

            {/* Card description */}
            <Description >
                {experience?.desc &&
                    <Span >{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills >
                            <b >Skills:</b>
                            <ItemWrapper >
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            
            {/* Card documentation */}
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default ExperienceCard