import img from '../../../assets/hero-creative-agenc1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div className="carousel w-full lg:h-[736px] h-[660px]">
            <div className="carousel-item relative w-full">
                <img src={img} className="w-full" />
                <div className="absolute flex items-center lg:pl-48 px-4 h-full">
                    <div className=' text-white space-y-7 lg:w-1/2 mt-24'>
                        <h1 className='lg:text-[60px] lg:leading-[72px] text-4xl font-black'>We believe in the power of creativity to solve problems.
                        </h1>
                        <p className='py-5 text-[#656487] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus, risus sit amet auctor sodales, justo erat tempor eros.</p>
                        <button className="btn rounded-full w-[150px] border-[#1c4efd] text-white">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;