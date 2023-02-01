import BannerImg from 'assets/images/about/aboutBannerBack.png';
import BgImage from 'assets/images/home/bg1.png';
import BannerContent from 'assets/images/about/aboutBannerContent.png';
import { Link } from 'react-router-dom';
import DiscordSvg from 'assets/svgs/Discord'
import FacebookSvg from 'assets/svgs/Facebook'
import TwitterSvg from 'assets/svgs/Twitter'
import YoutubeSvg from 'assets/svgs/Youtube'
import './style.css';


const AboutBanner = () => {
    return (
        <div className='w-full md:h-[70vh] h-[55vh] flex items-center justify-center' style={{
            backgroundImage: `url(${BgImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='w-3/5 md:h-[50vh] h-[45vh] flex items-center justify-center' style={{
                backgroundImage: `url(${BannerImg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '20px'
            }}>
                <div className='w-4/5 md:h-[40vh] h-[35vh] flex items-center justify-center' style={{
                    backgroundImage: `url(${BannerContent})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '20px'
                }}>
                    <div className='flex flex-col md:gap-8 gap-6 justify-center items-center'>
                        <h1
                            className='md:text-[1.8rem] sm:text-[1.5rem] text-[1rem] font-bold text-pure'
                            style={{
                                color: 'black',
                            }}
                        >
                            ABOUT US
                        </h1>
                        <ul className='w-full flex items-center gap-6 text-pure text-semibold navLinks'>
                            <li className='hover:text-primaryLight li-text'>
                                <Link to='/'>Home</Link>
                            </li>
                            <li className='hover:text-primaryLight li-text'>
                                <Link to='/'>Explore</Link>
                            </li>
                            <li className='hover:text-primaryLight li-text'>
                                <Link to='/'>Road Map</Link>
                            </li>
                        </ul>
                        <div className="line-below"></div>
                        <div className='flex items-center gap-2 mt-4 mb-4'>
                            <div className='border-2 border-primaryLight bg-primary py-1 px-1 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                                <FacebookSvg />
                            </div>
                            <div className='border-2 border-primaryLight bg-primary py-1 px-1 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                                <DiscordSvg />
                            </div>
                            <div className='border-2 border-primaryLight bg-primary py-1 px-1 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                                <TwitterSvg />
                            </div>
                            <div className='border-2 border-primaryLight bg-primary py-1 px-1 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                                <YoutubeSvg />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutBanner;