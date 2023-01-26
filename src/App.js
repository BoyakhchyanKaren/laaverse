import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from 'pages/home';
import Header from 'components/home/header';
import Nav from 'components/home/nav';

function App() {
    return (
        <main>
            <Router>
                <Header />
                <Nav />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<div>About us</div>} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
