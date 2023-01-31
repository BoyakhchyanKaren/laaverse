import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { data } from './data';
import CheckSvg from 'assets/svgs/Check';

const RoadMapSlider = () => {
    SwiperCore.use([Autoplay]);
    return (
        <div className="pt-16">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    pauseOnMouseEnter: true,
                    disableOnInteraction: false
                }}
                modules={[Pagination, Autoplay]}
                className="roadMapSlider"
                breakpoints={{
                    1100: {
                        slidesPerView: 4
                    },
                    850: {
                        slidesPerView: 3
                    },
                    650: {
                        slidesPerView: 2
                    },
                    200: {
                        slidesPerView: 1
                    }
                }}
            >
                {
                    data?.map(item => (
                        <SwiperSlide key={item?.id}>
                            <div className={`w-full h-full ${item?.id % 2 !== 0 ? 'bg-primaryDark' : ''} border border-primaryLight rounded-lg relative`}>
                                <div
                                    className="my-[2px] ml-0.5 w-fit py-[2px] px-3 text-pure text-sm rounded-md"
                                    style={{
                                        background: 'linear-gradient(270deg, #C87BFF 0%, #9A18D7 100%)'
                                    }}
                                >
                                    {item?.phase}
                                </div>
                                <h5 className="text-pure my-3 text-xl font-medium tracking-[2px] ml-2">{item?.name}</h5>
                                <p className="text-gray-100 text-sm ml-2">{item?.desc}</p>
                                <ul className="pt-6 border-t border-t-primaryLight mt-6 pl-2 flex flex-col gap-3">
                                    {
                                        item?.features?.map(f => (
                                            <li className="flex items-center gap-2 text-light text-[13px]">
                                                <div>
                                                    <CheckSvg />
                                                </div>
                                                <p className="translate-y-[-2px]">{f}</p>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="px-2 text-light text-sm font-medium mt-3 absolute bottom-2 right-0">
                                    <span>{item?.date}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default RoadMapSlider