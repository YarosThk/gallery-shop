import { Link } from "react-router-dom";
import { HomeContainer, Flex, Heading, IntroImage, Footer, FooterMessage, MediaIconsContainer  } from "../components/styled/Home.styled"
import { FaInstagram, FaGithub, FaYoutube, FaTwitter } from 'react-icons/fa';
import IntroImage1 from "../images/intro_tower_bridge.webp";
import IntroImage2 from "../images/intro_beach.webp";
import IntroImage3 from "../images/intro_travel.webp";


export const HomePage = () =>{

    return(
        <HomeContainer>
            <Link to="/shop">
                <Flex>
                    <Heading>OFFICIAL PRINTS</Heading>
                    <IntroImage src={IntroImage1} />
                </Flex>
            </Link>
            <Link to="/shop">
                <Flex>
                    <Heading>PHOTO SHOOTS</Heading>
                    <IntroImage src={IntroImage2}/>
                </Flex>
            </Link>
            <Link to="/shop">
                <Flex>
                    <Heading>TRAVEL PHOTOGRAPHY</Heading>
                    <IntroImage src={IntroImage3}/>
                </Flex>
            </Link>
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

