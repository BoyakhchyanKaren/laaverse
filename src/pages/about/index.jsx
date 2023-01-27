import { AboutBanner, NewsLetter, NftCollection, CreatePortfolio, TeamMembers, PartnerBrands, Statistic, JoinNft, Steps } from "components/about";

const About = () => {
    return (
        <div>
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