import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from 'components/home/header';
import Nav from 'components/home/nav';
import HomeFooter from 'components/home/footer';
import { Home, About, NftMarket } from 'pages';

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
                </Routes>
                <section>
                    <HomeFooter />
                </section>
            </Router>
        </main>
    );
}

export default App;
