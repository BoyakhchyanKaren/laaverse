import BannerImg from 'assets/images/home/banner.jpg';

const Banner = () => {
    return (
        <div className='w-full md:h-[70vh] h-[55vh] flex items-center justify-center' style={{
            backgroundImage: `url(${BannerImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className='flex flex-col md:gap-8 gap-6 justify-center items-center'>
                <h1
                    className='md:text-[5rem] sm:text-[4rem] text-[3.5rem] font-bold lg:tracking-[12px] md:tracking-[8px] tracking-[4px] text-pure'
                    style={{
                        textShadow: '3px 0px 7px rgb(175,68,212 , 0.8) , -3px 0px 7px rgb(175,68,212 , 0.8), 0px 4px 7px rgb(175,68,212 , 0.8)'
                    }}
                >
                    Laaverse
                </h1>
                <h4 className='text-center font-medium text-light md:text-xl sm:text-base text-sm leading-[1.4] ' style={{ wordSpacing: '3px' }}>
                    Welcome to Laaverse the digital <br /> World of Tomorrow
                </h4>
                <div className='border-2 border-dashed p-1 rounded-md mt-4'>
                    <button className='bg-primary text-pure py-2 md:px-14 px-8 sm:text-base text-sm rounded-md hover:bg-primaryHover'>Play here</button>
                </div>
            </div>
        </div>
    )
}

export default Banner