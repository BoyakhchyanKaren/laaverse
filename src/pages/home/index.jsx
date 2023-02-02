import Banner from 'components/home/banner'
import CharactersNFTs from 'components/home/charactersNFTs'
import GovernanceOverview from 'components/home/governanceOverview'
import OwnAndDevelop from 'components/home/ownAndDevelop'
import { colors } from 'constants/colors'
import React from 'react'
import { Animate } from 'components/global/animation'

const Home = () => {
    return (
        <div style={{
            backgroundColor: colors.primaryBackground,
        }}>
            <Animate.FadeUp>
                <Banner />
            </Animate.FadeUp>
            <section>
                <Animate.FadeUp>
                    <CharactersNFTs />
                </Animate.FadeUp>
            </section>
            <section>
                <Animate.FadeUp>
                    <GovernanceOverview />
                </Animate.FadeUp>
            </section>
            <section>
                <Animate.FadeUp>
                    <OwnAndDevelop />
                </Animate.FadeUp>
            </section>
        </div>
    )
}

export default Home