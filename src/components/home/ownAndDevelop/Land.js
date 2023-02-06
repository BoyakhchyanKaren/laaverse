import BigLand from 'assets/images/about/bigLand.png';
import BigLand1 from 'assets/images/about/bigLand1.png';
import BigLand2 from 'assets/images/about/bigLand2.png';
import BigLand3 from 'assets/images/about/bigLand3.png';
import AnimatedCounter from 'components/global/animation/counter';
import './styles.css';

const Land = () => {
    return (
        <div className='w-full min-h-screen h-full flex items-center justify-between lg:px-12 md:px-8 sm:px-4 px-2 lg:py-12 pt-12 pb-20 lg:flex-row flex-col  lg:gap-2 gap-20'>
            <div className='flex-1 relative z-20'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl relative font-bold'>
                    <span className='text-purple-400'>Own & Dev</span>
                    <span className='text-primaryLight'>elop Y</span>
                    <span className='text-light'>our Land</span>
                </h1>
                <div className="heading-line"></div>
                <div className='flex flex-col text-light lg:pr-16 sm:pr-8 pr-0 mt-12'>
                    <p>Buy available land tiles from anywhere in the world or check the
                        marketplace to see who is selling theirs.
                    </p>
                    <p>
                        There are millions of dollars worth of Player-to-Players land traded every year.
                    </p>
                    <p>Land Owners can participate in the EcoSim by building a Mentar
                        to begin detecting E-ther. </p>
                    <p>
                        Over time you can decide how to take your land’s development
                        to the next level.</p>
                </div>
                <div className='flex items-center justify-between sm:gap-x-4 gap-x-3 gap-y-8 text-light mt-12 relative z-20 flex-wrap'>
                    <div className='border-2 md:w-[120px] w-[100px] h-[100px] md:h-[120px] border-dashed rounded-full flex items-center justify-center flex-col '>
                        <h5 className='md:text-[1.8rem] text-[1.4rem] font-bold text-pure'><AnimatedCounter n={78} /></h5>
                        <span className='md:text-sm text-xs'>Commercial</span>
                    </div>
                    <div className='border-2 md:w-[120px] w-[100px] h-[100px] md:h-[120px] border-dashed rounded-full flex items-center justify-center flex-col '>
                        <h5 className='md:text-[1.8rem] text-[1.4rem] font-bold text-pure'><AnimatedCounter n={26} /></h5>
                        <span className='text-sm'>Residential</span>
                    </div>
                    <div className='border-2 md:w-[120px] w-[100px] h-[100px] md:h-[120px] border-dashed rounded-full flex items-center justify-center flex-col '>
                        <h5 className='md:text-[1.8rem] text-[1.4rem] font-bold text-pure'><AnimatedCounter n={38} /></h5>
                        <span className='text-sm'>Industrial</span>
                    </div>
                    <div className='border-2 md:w-[120px] w-[100px] h-[100px] md:h-[120px] border-dashed rounded-full flex items-center justify-center flex-col '>
                        <h5 className='md:text-[1.8rem] text-[1.4rem] font-bold text-pure'><AnimatedCounter n={20} /></h5>
                        <span className='text-sm'>Parks</span>
                    </div>
                </div>
                <div className='relative z-20 flex items-center sm:gap-8 gap-4 mt-12'>
                    <div className='bg-primaryLight text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-primaryLight sm:text-base text-sm'>
                        <button>Buy Land</button>
                    </div>
                    <div className='rounded-full py-2 px-6 text-light border border-light hover:border-yellow hover:text-yellow sm:text-base text-sm'>
                        <button>Explore Market Place</button>
                    </div>
                </div>
            </div>
            <div className='flex-1 flex items-center justify-center'>
                <div className='w-full md:h-[92vh] h-[55vh] flex items-center justify-center' style={{
                    backgroundImage: `url(${BigLand})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    <img src={BigLand1} alt="Land" className='lg:w-[15%] w-full image-animated1' style={{
                        position: 'absolute',
                        top: 0,
                        right: 20,
                    }} />
                    <img src={BigLand3} alt="Land" className='lg:w-[12%] w-full image-animated2' style={{
                        position: 'absolute',
                        top: '6%',
                        right: '37%',
                    }} />
                    <img src={BigLand2} alt="Land" className='lg:w-[10%] w-full image-animated3' style={{
                        position: 'absolute',
                        top: '40%',
                        right: '31%',
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Land