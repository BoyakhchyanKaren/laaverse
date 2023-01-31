import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/home/header';
import Nav from 'components/home/nav';
import HomeFooter from 'components/home/footer';
import { Home, About, NftMarket, Stacking, Media, DAO } from 'pages';
import { Animate } from 'components/global/animation';
import Drawer from 'components/global/drawer';

function App() {
    return (
        <main>
            <Router>
                <Header />
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/nft' element={<NftMarket />} />
                    <Route path='/stacking' element={<Stacking />} />
                    <Route path='/media' element={<Media />} />
                    <Route path='/dao' element={<DAO />} />
                </Routes>
                <section className='home-footer-section'>
                    <Animate.FadeUp>
                        <HomeFooter />
                    </Animate.FadeUp>
                </section>
                <Drawer />
            </Router>
        </main>
    );
}

export default App;
