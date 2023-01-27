import RobotImage from 'assets/images/home/robot.png';
import FacebookSvg from 'assets/svgs/Facebook';
import DiscordSvg from 'assets/svgs/Discord';

const JoinCommunity = () => {
    return (
        <div className='w-full rounded-lg lg:px-16 md:px-6 sm:px-4 px-2 md:py-16 pt-4 pb-8 relative ' style={{ background: 'rgba(12, 3, 29, 0.62)' }}>
            <div className='lg:w-1/2 md:w-[70%] w-full flex flex-col gap-4 '>
                <h1 className='lg:text-5xl md:text-4xl sm:text-3xl text-2xl  text-pure font-bold'>Join Our Community</h1>
                <p className='text-light my-4 text-[15px]'>So why wait? Join our community of players and start <br /> exploring the exciting world of the Metaverse today!</p>
                <div className='mt-4 flex items-center gap-4'>
                    <div className='flex items-center gap-2 rounded-md border border-primaryLight text-light py-2 px-4 cursor-pointer hover:border-primary hover:text-primary communityBtn sm:text-base text-sm'>
                        <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full '>
                            <FacebookSvg />
                        </div>
                        <span>Facebook</span>
                    </div>
                    <div className='flex items-center gap-2 rounded-md border border-primaryLight text-light py-2 px-4 cursor-pointer hover:border-primary hover:text-primary communityBtn sm:text-base text-sm'>
                        <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full '>
                            <DiscordSvg />
                        </div>
                        <span>Discord</span>
                    </div>
                </div>
            </div>
            <div className='absolute lg:-top-[25%] md:-top-[20%] -top-[10%]  right-0 w-1/2 flex justify-end pr-4'>
                <img src={RobotImage} alt="Robot" className='xl:w-[70%] lg:w-[80%] md:w-[95%] hidden md:block' />
            </div>
        </div>
    )
}

export default JoinCommunity