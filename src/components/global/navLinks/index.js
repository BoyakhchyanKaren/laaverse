import { Link } from 'react-router-dom';
import './styles.css';

const NavLinks = () => {
    return (
        <ul className='w-full flex items-center gap-6 text-pure text-semibold navLinks'>
            <li className='hover:text-primaryLight'>
                <Link to='/'>GAME PLAY</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='/about'>ABOUT US</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='#'>NFT MARKET</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='#'>LAND MAP</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='#'>STAKING</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='#'>MEDIA</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='#'>DAO</Link>
            </li>
            <li className='hover:text-primaryLight'>
                <Link to='#'>FQA</Link>
            </li>
        </ul>
    )
}

export default NavLinks