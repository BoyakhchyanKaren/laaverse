import './styles.css';
import BgImage from 'assets/images/home/bg1.png';
import JoinCommunity from './JoinCommunity';
import Social from './Social';

const HomeFooter = () => {
    return (
        <div 
        className='w-full  h-full pt-20 pb-10 px-2'
        style = {{
            backgroundImage : `url(${BgImage})`,
            backgroundSize : 'cover',
            backgroundRepeat : 'no-repeat'
        }}
        >
            <div>
                <JoinCommunity />
            </div>
            <div>
                <Social />
            </div>
        </div>
    )
}

export default HomeFooter