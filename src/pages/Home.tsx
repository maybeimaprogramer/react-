import Navbar from "../components/global/Navigation";
import Maincont from "../components/global/maincontent";

const Home = () =>{
    return (
        <> {/**Fragment tag, or empty tag
         * 
         * One other way to use it:
         * <React.Fragment>
         * </React.Fragment>
         */}
         <Navbar />
         <Maincont />
        </>
    )
}

export default Home;