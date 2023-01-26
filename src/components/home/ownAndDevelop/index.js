import './styles.css';
import Shadow from 'assets/images/home/purple-shadow.png';
import Land from './Land';
import RoadMap from './RoadMap';


const OwnAndDevelop = () => {
    return (
        <div className='w-full h-full bg-darkBlue relative'>
            <div>
                <Land />
            </div>
            <div>
                <RoadMap />
            </div>
            <div className='absolute bottom-[25%] left-0 w-full h-full' style={{backgroundImage : `url(${Shadow})` , backgroundRepeat : 'no-repeat'}}></div>
        </div>
    )
}

export default OwnAndDevelop