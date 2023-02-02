import './styles.css';
import Logo from 'components/global/logo'
import NavLinks from 'components/global/navLinks'
import Bell from 'assets/svgs/bell.svg';
import ArrowDown from 'assets/svgs/arrowDown.svg';
import { useDrawerContext } from 'context/drawerContext';
import Header from '../header';

const NavigationBar = () => {
    const { showDrawer, setShowDrawer } = useDrawerContext();

    return (
        <div className='flex items-center justify-between bg-darkBlue gap-2  xl:px-8 py-4 sm:px-4 px-2'>
            <div>
                <Logo />
            </div>
            <div className='home-large-navLinks'>
                <NavLinks />
            </div>
            <div className='flex items-center gap-4 text-pure font-semibold downloadBtnContainer'>
                <div className='bg-primary cursor-pointer flex items-center justify-center rounded-md w-[20px] h-[20px]'>
                    <img src={Bell} alt="bell" />
                </div>
                <p>Download</p>
                <div className='bg-primary cursor-pointer flex items-center justify-center px-[3px] rounded-md w-[20px] h-[20px]'>
                    <img src={ArrowDown} alt="bell" />
                </div>
            </div>
            <div className='home-large-connectWalletBtn bg-primary py-2 rounded-md text-center text-pure px-6 hover:bg-primary hover:bg-opacity-59'>
                <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    Connect Wallet
                </button>
            </div>

            <div className={`hamburger ${showDrawer ? 'change' : ''}`}
                onClick={() => setShowDrawer(!showDrawer)}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>

        </div>
    )
}

const StickyHeader = () => {
    return (
        <div style={{
            position: 'sticky',
            top: 0,
            zIndex: 999,
            width: '100%',
        }}>
            <Header />
            <NavigationBar />
        </div>
    )
}

export default StickyHeader