import Banner from 'components/home/banner'
import CharactersNFTs from 'components/home/charactersNFTs'
import GovernanceOverview from 'components/home/governanceOverview'
import OwnAndDevelop from 'components/home/ownAndDevelop'
import { colors } from 'constants/colors'
import React from 'react'

const Home = () => {
    return (
        <div style={{
            backgroundColor: colors.primaryBackground,
        }}>
            <Banner />
            <section>
                <CharactersNFTs />
            </section>
            <section>
                <GovernanceOverview />
            </section>
            <section>
                <OwnAndDevelop />
            </section>
        </div>
    )
}

export default Home