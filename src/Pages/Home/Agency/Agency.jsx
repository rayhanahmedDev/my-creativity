import aboutImg from '../../../assets/about-dg-agency.jpg'
import './Agency.css'

const Agency = () => {
    return (
        <div className="hero max-w-[1200px] mx-auto pt-12 pb-12 lg:pt-[120px] lg:pb-[120px]">
            <div className="content flex-col lg:flex-row">
                <div className='lg:w-1/2 w-full'>
                <img className='w-full px-5 lg:px-3' src={aboutImg} />
                </div>
                <div className='lg:w-1/2 w-full text-center lg:text-left px-6 lg:px-0 mt-5 lg:mt-0'>
                    <p className='des font-bold'>WE ARE CREATIVE AGENCY</p>
                    <h3 className="font-black text-[#050748]">We are A Creative Agency with a passion for design</h3>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <button className="btn border-none rounded-full text-white px-9">Request a Proposal</button>
                </div>
            </div>
        </div>
    );
};

export default Agency;