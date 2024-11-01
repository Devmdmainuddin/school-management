import HeroBanner from "../../components/home/HeroBanner";
import PopularCourses from "../../components/home/PopularCourses";
import Tutors from "../../components/home/Tutors";


const Home = () => {
    return (
        <div>
            <HeroBanner></HeroBanner>
            <PopularCourses></PopularCourses>
            <Tutors></Tutors>
        </div>
    );
};

export default Home;