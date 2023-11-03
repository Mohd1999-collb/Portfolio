import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation/HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,ResumeButton } from './HeroStyle'
// import HeroImg from '../../images/me.jpg'
// import HeroImg from '../../images/img_1.jpg'
import HeroImg from '../../images/talibImg.jpg'
// import HeroImg from '../../images/img-2.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const Hero = () => {
    return (
        <div id="about">
            <HeroContainer>
                {/* Image background animation */}
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>

                <HeroInnerContainer >
                    {/* Left setion */}
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Download Resume</ResumeButton>
                    </HeroLeftContainer>
                    
                     {/* Right setion */}
                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default Hero