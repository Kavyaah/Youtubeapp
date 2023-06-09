import '../Styles/home.css'
import banner from '../Images/nature2.jpg'
import Categories from "./Categories";

import Videos from './videos';

const Home = () => {
    return ( 
        <div className="home">
            
            <Categories/>
            <img  src={banner} style={{marginLeft:"10px",height:"250px", width:"1220px"}} class="img"alt="" />
            <Videos/>
        </div>
     );
}
 
export default Home;