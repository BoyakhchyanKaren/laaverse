import Bg from 'assets/images/home/governance-bg.png';
import Thumbnail from 'assets/images/home/governance-thumbnail.png';
import Play from 'assets/svgs/play.svg';
import { Animate } from 'components/global/animation';


const GovernanceOverview = () => {
    return (
        <div className='w-full lg:h-screen pt-12 pb-20 flex items-center justify-center relative'
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* bg gradient */}
            <div className="absolute top-0 left-0 w-full h-full"
                style={{
                    background: 'linear-gradient(158deg, rgba(42,1,56,0.7455357142857143) 26%, rgba(41,0,71,0.9332107843137255) 50%)'
                }}>
            </div>
            <div className='w-full flex flex-col gap-3  text-pure'>
                <Animate.FadeUp>
                    <h3 className='text-2xl relative z-20 font-semibold text-primaryLight text-center'>Governance Overview</h3>
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <div className='lg:w-[60%] md:w-[75%] sm:w-[90%] w-[97%] lg:h-[450px] md:h-[400px] h-[330px] mx-auto relative'>
                        <div
                            className='thumbnail absolute top-0 left-0 w-full h-full rounded-[1rem] '
                            style={{
                                backgroundImage: `url(${Thumbnail})`,
                                backgroundSize: 'cover'
                            }}>
                            <div className='absolute top-0 left-0 w-full h-full bg-primaryDark opacity-50 rounded-[2rem]'></div>
                        </div>
                        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-primary flex items-center justify-center rounded-full w-[60px] h-[60px] cursor-pointer'>
                            <img src={Play} alt='Play' width={20} className='' />
                        </div>

                        <div className='z-20 absolute md:left-8 md:bottom-8 bottom-4 left-4 flex flex-col gap-4 justify-start'>
                            <div
                                className='py-2 px-3 md:text-xl sm:text-base text-sm font-medium tracking-[3px]'
                                style={{
                                    background: 'linear-gradient(83deg, rgba(145,38,181,1) 0%, rgba(36,23,46,0.5830707282913166) 100%)'
                                }}>
                                X - Laaverse
                            </div>
                            <p className='sm:text-sm text-xs text-light'>Explore Virtual Land</p>
                            <div className='hover:bg-primary hover:text-primaryLight bg-light  py-2.5 font-semibold sm:text-sm text-xs px-6 text-center text-black w-fit'>
                                <button>Join Now</button>
                            </div>
                        </div>
                    </div>
                </Animate.FadeUp>
            </div>
        </div >
    )
}

export default GovernanceOverview