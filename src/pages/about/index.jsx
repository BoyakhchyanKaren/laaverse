import { AboutBanner, NewsLetter, NftCollection, CreatePortfolio, TeamMembers, PartnerBrands, Statistic, JoinNft, Steps } from "components/about";
import { colors } from "constants/colors";
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div style={{
            backgroundColor: colors.secondaryBackgroundLight,
        }}>
            <Fade bottom>
                <AboutBanner />
            </Fade>
            <section>
                <Fade bottom>
                    <NftCollection />
                </Fade>
            </section>
            <section>
                <Fade bottom>
                    <PartnerBrands />
                </Fade>
                <Fade bottom>
                    <Statistic />
                </Fade>
            </section>
            <section>
                <Fade bottom>
                    <JoinNft />
                </Fade>
                <Fade bottom>
                    <Steps />
                </Fade>
                <Fade bottom>
                    <TeamMembers />
                </Fade>
                <Fade bottom>
                    <CreatePortfolio />
                </Fade>
                <Fade bottom>
                    <NewsLetter />
                </Fade>
            </section>
        </div>
    );
};

export default About;