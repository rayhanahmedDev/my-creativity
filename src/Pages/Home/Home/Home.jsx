import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";


const Home = () => {
    return (
        <div className="w-full">
            <div>
                <Navber></Navber>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;