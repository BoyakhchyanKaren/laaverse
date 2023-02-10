import './styles.css';
import Logo from 'components/global/logo'
import NavLinks from 'components/global/navLinks'
import Bell from 'assets/svgs/bell.svg';
import ArrowDown from 'assets/svgs/arrowDown.svg';
import { useDrawerContext } from 'context/drawerContext';
import Header from '../header';
import { useModalsContext } from 'context/modalsContext';

const NavigationBar = () => {
    const { showDrawer, setShowDrawer } = useDrawerContext();
    const { setShowModal } = useModalsContext();

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
                <button onClick={() => setShowModal(true)} className={'connect-wallet'}>Connect Wallet</button>
            </div>
            <div onClick={() => setShowDrawer(!showDrawer)} >
                <div className={`hamburger ${showDrawer ? 'change' : ''}`}
                >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
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