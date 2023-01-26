import Drawer from 'components/global/drawer'
import Banner from 'components/home/banner'
import CharactersNFTs from 'components/home/charactersNFTs'
import HomeFooter from 'components/home/footer'
import GovernanceOverview from 'components/home/governanceOverview'
import OwnAndDevelop from 'components/home/ownAndDevelop'
import React from 'react'

const Home = () => {
    return (
        <div>
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
            <section>
                <HomeFooter />
            </section>
            <Drawer />
        </div>
    )
}

export default Home