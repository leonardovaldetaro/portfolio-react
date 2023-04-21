import Home from 'Pages/Home';
import Sobre from 'Pages/Home/Sobre';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter () {
    return (
        <main className='container'>
            <Router>
                <Header />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='sobre' element={<Sobre />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
