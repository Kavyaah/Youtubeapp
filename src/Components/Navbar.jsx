import  Youtube from '../Images/YtLogo.png'
import alertbell from '../Images/1491254390-ringalertbellcall_82958.png'
import videocam from '../Images/video-camera_icon-icons.com_63911.png'
import '../Styles/Navbar.css'

const Navbar = () => {


    return ( 
        <div className="navbar">

            <div className="logo">
          
<img width={130} src={Youtube} alt="" />

</div>
<div className="search"><input type="text" placeholder='SearchYouTube'/></div>
<div className="useroptions">

<img width={130} src={videocam}   style={{ height: "35px",marginLeft:"38px" ,paddingTop: "15px" }} class="not" alt="" />
<img width={130} src={alertbell}  style={{ height: "30px", paddingTop: "18px" }} class="not" alt="" />

<p class="text" style={{fontSize: "18px", marginLeft:"10px", borderRadius: '50%', backgroundColor:"Green" ,height:"14px",width:"200px" }}>K</p>
                
        
</div>
        </div>
     );
}
 
export default Navbar;

