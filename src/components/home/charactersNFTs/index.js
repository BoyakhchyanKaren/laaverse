import './styles.css';
import Shadow from 'assets/images/home/purple-shadow.png';

const CharactersNFTs = () => {
    return (
        <div className='w-full min-h-screen h-full lg:flex-row flex-col lg:gap-4 gap-8 flex items-center justify-between bg-darkBlue py-12 md:px-12 sm:px-6 px-3 relative'>
            <div className='flex-1 relative z-20'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl relative font-bold'>
                    <span className='text-purple-400'>Chara</span>
                    <span className='text-primaryLight'>cters NFTs </span>
                    <span className='text-light'>Laaverse</span>
                </h1>
                <div className="heading-line"></div>
                <div className='mt-12 flex flex-col gap-6 text-pure'>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quas eos aspernatur magni ut adipisci debitis consequatur nihil, necessitatibus dolorem, provident similique ducimus tenetur voluptatum minima nostrum placeat qui minus cum optio labore tempore rem. Molestiae, nisi odio! Necessitatibus, dolorem."</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium vero nisi numquam dolore pariatur omnis laboriosam reiciendis dolores quidem ex ullam, doloribus similique, eveniet debitis, repellendus ad corrupti velit commodi.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit minus cupiditate laborum adipisci.</p>
                </div>

            </div>
            <div className='flex-1 relative z-20'>
                <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dbc1935-6542-4ee3-822f-135cff4ba62c/dd718v0-d9286e35-0018-4ace-a8ef-88c2f23b0a0c.png/v1/fill/w_736,h_558,strp/quantum_realm_suits___transparent__by_speedcam_dd718v0-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTU4IiwicGF0aCI6IlwvZlwvMWRiYzE5MzUtNjU0Mi00ZWUzLTgyMmYtMTM1Y2ZmNGJhNjJjXC9kZDcxOHYwLWQ5Mjg2ZTM1LTAwMTgtNGFjZS1hOGVmLTg4YzJmMjNiMGEwYy5wbmciLCJ3aWR0aCI6Ijw9NzM2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.kiCz4lh7LsE-6iEC1Lrd5pnegfgFijIwvvsNhTMcn2o" alt="" />
            </div>
            <div className='absolute bottom-0 left-0 w-full h-full' style={{ backgroundImage: `url(${Shadow})`, backgroundRepeat: 'no-repeat' }}></div>
        </div>
    )
}

export default CharactersNFTs