import { AboutBanner, NewsLetter, NftCollection, CreatePortfolio, TeamMembers, PartnerBrands, Statistic, JoinNft, Steps } from "components/about";
import { colors } from "constants/colors";
import { Animate } from "components/global/animation";

const About = () => {
    return (
        <div style={{
            backgroundColor: colors.primaryBackground,
        }}>
            <Animate.FadeUp>
                <AboutBanner />
            </Animate.FadeUp>
            <section>
                <Animate.FadeUp>
                    <NftCollection />
                </Animate.FadeUp>
            </section>
            <section>
                <Animate.FadeUp>
                    <PartnerBrands />
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <Statistic />
                </Animate.FadeUp>
            </section>
            <section>
                <Animate.FadeUp>
                    <JoinNft />
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <Steps />
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <TeamMembers />
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <CreatePortfolio />
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <NewsLetter />
                </Animate.FadeUp>
            </section>
        </div>
    );
};

export default About;