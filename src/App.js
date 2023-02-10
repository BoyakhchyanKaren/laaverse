import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeFooter from 'components/home/footer';
import { Home, About, NftMarket, Stacking, Media, DAO, FAQ, LandMap } from 'pages';
import { Animate } from 'components/global/animation';
import Drawer from 'components/global/drawer';
import StickyHeader from 'components/home/nav';
import { ConnectWalletModal } from 'components/global/modals';

function App() {
    return (
        <main>
            <Router>
                <StickyHeader />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/nft' element={<NftMarket />} />
                    <Route path='/stacking' element={<Stacking />} />
                    <Route path='/media' element={<Media />} />
                    <Route path='/dao' element={<DAO />} />
                    <Route path='/fqa' element={<FAQ />} />
                    <Route path='/map' element={<LandMap />} />
                </Routes>
                <section className='home-footer-section'>
                    <HomeFooter />
                </section>
                <Drawer />
                <ConnectWalletModal />
            </Router>
        </main>
    );
}

export default App;
