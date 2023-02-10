import { AboutBanner, NewsLetter, NftCollection, CreatePortfolio, TeamMembers, PartnerBrands, Statistic, JoinNft, Steps } from "components/about";
import { colors } from "constants/colors";
import { Animate } from "components/global/animation";

const About = () => {
    return (
        <div style={{
            backgroundColor: colors.primaryBackground,
        }}>
            <AboutBanner />
            <section>
                <NftCollection />
            </section>
            <section>
                <PartnerBrands />
                <Statistic />
            </section>
            <section>
                <JoinNft />
                <Steps />
                <TeamMembers />
                <CreatePortfolio />
                <NewsLetter />
            </section>
        </div>
    );
};

export default About;