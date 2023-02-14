import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NavLinks = () => {
    const navigateTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <ul className='w-full flex items-center gap-6 text-pure text-semibold navLinks'>
            <li className='hover:text-primaryLight'>
                <Link to='/' onClick={navigateTop}>GAME PLAY</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/about' onClick={navigateTop}>ABOUT US</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/nft' onClick={navigateTop}>NFT MARKET</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/map' onClick={navigateTop}>LAND MAP</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/stacking' onClick={navigateTop}>STAKING</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/media' onClick={navigateTop}>MEDIA</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/dao' onClick={navigateTop}>DAO</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/fqa' onClick={navigateTop}>FQA</Link>
            </li>
        </ul>
    )
}

export default NavLinks