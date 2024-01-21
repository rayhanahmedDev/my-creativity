import Agency from "../Agency/Agency";
import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";


const Home = () => {
    return (
        <div className="w-full">
            <div>
                <Navber></Navber>
                <Banner></Banner>
            </div>
            <div className="bg-[#F5F5F5]">
                <Agency></Agency>
            </div>
        </div>
    );
};

export default Home;