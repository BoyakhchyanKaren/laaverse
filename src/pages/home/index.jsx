import Drawer from 'components/global/drawer'
import Banner from 'components/home/banner'
import CharactersNFTs from 'components/home/charactersNFTs'
import GovernanceOverview from 'components/home/governanceOverview'
import OwnAndDevelop from 'components/home/ownAndDevelop'
import { colors } from 'constants/colors'
import React from 'react'
import Fade from 'react-reveal/Fade';

const Home = () => {
    return (
        <div style={{
            backgroundColor: colors.secondaryBackgroundLight
        }}>
            <Fade bottom>
                <Banner />
            </Fade>
            <section>
                <Fade bottom>
                    <CharactersNFTs />
                </Fade>
            </section>
            <section>
                <Fade bottom>
                    <GovernanceOverview />
                </Fade>
            </section>
            <section>
                <Fade bottom>
                    <OwnAndDevelop />
                </Fade>
            </section>
            <Fade bottom>
                <Drawer />
            </Fade>
        </div>
    )
}

export default Home