import React from 'react'
import {Button, Card,  Image, Tags, Tag, Details, Title, Date, Description, Members, Avatar} from "./ProjectCardStyle"


const ProjectCards = ({project,setOpenModal}) => {
    return (
        <Card onClick={() => setOpenModal({state: true, project: project})}>
            {/* Project image and tags */}
            <Image src={project.image}/>
            <Tags>
                {project.tags?.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            
            {/* Project details */}
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>

            <Members>
                {project.member?.map((member) => (
                    <Avatar src={member.img} key={Math.random()}/>
                ))}
            </Members>
            {/* <Button>View Project</Button> */}
        </Card>
    )
}

export default ProjectCards