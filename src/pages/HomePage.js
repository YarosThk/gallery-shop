import { HomeContainer, Flex, Heading, IntroImage, Footer, FooterMessage, MediaIconsContainer  } from "../components/styled/Home.styled"
import { FaInstagram, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import IntroImage1 from "../images/intro_tower_bridge.jpg";
import IntroImage2 from "../images/intro_beach.jpg";
import IntroImage3 from "../images/intro_travel.jpg";


export const HomePage = () =>{

    return(
        <HomeContainer>
            <Flex>
                <Heading>OFFICIAL PRINTS</Heading>
                <IntroImage src={IntroImage1}/>
            </Flex>
            <Flex>
                <Heading>PHOTO SHOOTS</Heading>
                <IntroImage src={IntroImage2}/>
            </Flex>
            <Flex>
                <Heading>TRAVEL PHOTOGRAPHY</Heading>
                <IntroImage src={IntroImage3}/>
            </Flex>
            <Footer>
                <FooterMessage>Follow</FooterMessage>
                <MediaIconsContainer>
                    <FaInstagram/>
                    <FaGithub/>
                    <FaYoutube/>
                    <FaTwitter/>
                </MediaIconsContainer>
            </Footer>
        </HomeContainer>
        )
}

