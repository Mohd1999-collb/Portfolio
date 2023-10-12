import React from 'react'
import { Document, Description, Span, Card, Top, Image, Body, Name, Degree, Date, Grade } from "./EducationCardStyle"

const EducationCard = ({ education }) => {
    return (
        <Card>
            {/* Card details */}
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}

export default EducationCard