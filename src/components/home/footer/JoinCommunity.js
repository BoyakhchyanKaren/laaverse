import BigUnder from 'assets/images/home/bigUnderRobot.png';
import SmallFirst from 'assets/images/home/smallAfterRobot.png';
import RobotImage from 'assets/images/home/footerRobot.png';
import FacebookSvg from 'assets/svgs/Facebook';
import DiscordSvg from 'assets/svgs/Discord';
import { Animate } from 'components/global/animation';

const JoinCommunity = () => {
    return (
        <div className='w-full rounded-lg lg:px-16 md:px-6 sm:px-4 px-2 md:py-16 pt-4 pb-8 relative ' style={{ background: 'rgba(12, 3, 29, 0.62)' }}>
            <div className='lg:w-1/2 md:w-[70%] w-full flex flex-col gap-4 '>
                <Animate.FadeUp>
                    <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-pure font-bold'>Join Our Community</h1>
                </Animate.FadeUp>
                <Animate.FadeUp>
                    <p className='text-light my-4 text-[15px]'>So why wait? Join our community of players and start <br /> exploring the exciting world of the Metaverse today!</p>
                </Animate.FadeUp>
                <div className='mt-4 flex items-center gap-4'>
                    <Animate.FadeUp>
                        <div className='flex items-center gap-2 rounded-md border border-primaryLight text-light py-2 px-4 cursor-pointer hover:border-primary hover:text-primary communityBtn sm:text-base text-sm'>
                            <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full '>
                                <FacebookSvg />
                            </div>
                            <span>Facebook</span>
                        </div>
                    </Animate.FadeUp>
                    <Animate.FadeUp>
                        <div className='flex items-center gap-2 rounded-md border border-primaryLight text-light py-2 px-4 cursor-pointer hover:border-primary hover:text-primary communityBtn sm:text-base text-sm'>
                            <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full '>
                                <DiscordSvg />
                            </div>
                            <span>Discord</span>
                        </div>
                    </Animate.FadeUp>
                </div>
            </div>
            <div className='absolute lg:-top-[25%] md:-top-[20%] -top-[10%]  right-0 w-1/2 flex justify-end pr-4'>
                <img src={BigUnder} alt="Land" className='lg:w-[27%] w-full big-under' style={{
                    position: 'absolute',
                    bottom: '25px',
                    right: '110px',
                }} />
                <div className='w-full md:h-[50vh] h-[25vh] flex items-center justify-center robot-main' style={{
                    backgroundImage: `url(${RobotImage})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative'
                }}>
                    <img src={SmallFirst} alt="Land" className='lg:w-[20%] w-full small-after' style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '160px',
                    }} />
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity