import { Container } from "../components/styled/Container.styled"
import { Flex, Heading, IntroDescription, IntroStyled, IntroImages } from "../components/styled/Home.styled"
import IntroImage1 from "../images/intro_tower_bridge.jpg";
import IntroImage2 from "../images/intro_autumn_park.jpg";


export const HomePage = () =>{
    return(
        <Flex>
            <IntroStyled>
                <IntroDescription>
                    <Heading>Get your prints now!</Heading>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                        blanditiis praesentium voluptatum deleniti atque corrupti quos 
                        dolores et quas molestias excepturi sint occaecati cupiditate non provident, 
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum 
                        et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    </p>
                </IntroDescription>
                <IntroImages>
                    <img src={IntroImage2} alt="" />
                    <img src={IntroImage1} alt=""/>                    
                </IntroImages>
            </IntroStyled>
        </Flex>
        )
}