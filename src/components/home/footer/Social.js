import DiscordSvg from 'assets/svgs/Discord'
import FacebookSvg from 'assets/svgs/Facebook'
import TwitterSvg from 'assets/svgs/Twitter'
import YoutubeSvg from 'assets/svgs/Youtube'
import { Animate } from 'components/global/animation'
import React from 'react'
import { Link } from 'react-router-dom'

const Social = () => {
    return (
        <div className='w-full pt-12  flex items-center justify-center flex-col gap-8'>
            <div className='relative text-pure sm:text-2xl text-xl font-semibold'>
                <Animate.FadeUp>
                    Find Us On Social Media
                    <div className="absolute -bottom-4 left-0 w-full h-[5px] rounded-full"
                        style={{
                            background: ' linear-gradient(90deg, #8A03EF 0%, #C06EC7 108.06%)'
                        }}
                    ></div>
                </Animate.FadeUp>
            </div>
            <div className='flex items-center gap-2 mt-4 mb-4'>
                <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                    <FacebookSvg />
                </div>
                <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                    <DiscordSvg />
                </div>
                <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                    <TwitterSvg />
                </div>
                <div className='border-2 border-primaryLight bg-primary py-0.5 px-0.5 rounded-full cursor-pointer duration-300 ease-in-out hover:-translate-y-2'>
                    <YoutubeSvg />
                </div>
            </div>
            <div>
                <ul className='flex items-center sm:gap-6 gap-4 text-pure font-medium sm:text-base text-sm'>
                    <li className='hover:text-primaryLight'>
                        <Link to='#'>Home</Link>
                    </li>
                    <li className='hover:text-primaryLight'>
                        <Link to='#'>Privacy Terms</Link>
                    </li>
                    <li className='hover:text-primaryLight'>
                        <Link to='#'>Terms of Services</Link>
                    </li>
                    <li className='hover:text-primaryLight'>
                        <Link to='#'>Map</Link>
                    </li>
                </ul>
            </div>
            <div className='text-gray-200 font-medium  sm:base text-xs'>
                <p>Copyright © 2022. All Rights Reserved by  Laaverse</p>
            </div>
        </div>
    )
}

export default Social