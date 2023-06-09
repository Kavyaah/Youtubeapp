import { useState } from "react";
import '../Styles/videos.css'
import shortsimg from '../Images/YouTube-shorts-logo.jpeg'


const Video = () => {
    let [video,setVideos] = useState(
       [ 
        {
            thumbnail:"https://i.ytimg.com/vi/s6fV5EQXal0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD-mFkCxql9p7mV-eeyuNfyEzC6gw",
            title:"Episode 897 - Taarak Mehta Ka Ooltah Chashmah - Full Episode",
            Channel:"Sony SAB",
            views:"1M views",
            id:"1"

        },
        {
            thumbnail:"https://i.ytimg.com/vi/jf2gOSORoqU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDFvsZthWldPIUou-Bd58Gy8vw40A",
            title:"Jab We Met | Full Movie | Kareena Kapoor | Shahid Kapoor | Bollywood Movie",
            Channel:"Sony Max11",
            views:"10M views",
            id:"2"

        },
        {
            thumbnail:"https://i.ytimg.com/vi/V_z8b9D5dVI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBs9FWEwoZQSDWdvBmm8nnRh4o-SQ",
            title:"Yeh Un Dinon Ki Baat Hai - Ep 366 - Full Episode",
            Channel:"SET India",
            views:"1M views",
            id:"3"

        },
        {
            thumbnail:"https://i.ytimg.com/vi/8sLS2knUa6Y/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDr_eXi4Y0T-HaPN7dm_4uT5L0rMg",
            title:"Phir Aur Kya Chahiye| Zara Hatke Zara Bachke| Vicky K, Sara Ali K, Arijit Singh,Sachin-Jigar,",
            Channel:"SLOW FI Music",
            views:"20M views",
            id:"4"

        },
        {
            thumbnail:"https://i.ytimg.com/vi/GBbxJ0LPapw/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFfyq4qpAygIARUAAIhCGAFwAcABBvABAfgB0AWAAtAFigIMCAAQARh_IDUoNDAP&rs=AOn4CLBA0qFxA0pJ5k-vQPCglYxue18M4w",
            title:"Vaaste Song: Dhvani Bhanushali, Tanishk Bagchi | Nikhil D | Bhushan Kumar | Radhika Rao",
            Channel:"T-series",
            views:"15M views",
            id:"5"

        },
        {
            thumbnail:"https://i.ytimg.com/vi/Af-nbt-fLlc/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFfyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIGMoSDAP&rs=AOn4CLC4xMifMQCaisNgA53gPRL_2pgN9Q",
            title:"Best of Arijit Singhs 2023 💖  Hindi Romantic Songs 2023 💖  Arijit Singh Hits Songs",
            Channel:"Slow Fi Music",
            views:"35M views",
            id:"6"

        },
        {
                thumbnail:"https://i.ytimg.com/vi/bUxd3jqCr94/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1jwtOHXMK-VUI8nnxD3xTGUUECA",
                title:"Mr Bean | Baking | Full Episodes Compilation | Cartoons for Children by WildBrain Bananas",
                Channel:"Mr Bean",
                views:"10M views",
                id:"7"
    
            },
            {
                thumbnail:"https://i.ytimg.com/vi/7XG6XuPz-jc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmnUW9uGe2Mh0OtDm-PhaPs7vnyw",
                title:"Kanasalu Nooru Baari - Mungaru Male 2 | Video Song | Shreya Ghoshal | Ganesh, Neha",
                Channel:"Jhankar Music",
                views:"6.9M views",
                id:"8"
    
            },
            {
                thumbnail:"https://i.ytimg.com/vi/K8KAbu45-kE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtgyRZ4bWRlVRO-uLSBMVWkOAc4Q",
                title:"UFF Full Video | BANG BANG! | Hrithik Roshan & Katrina Kaif | HD by Zee Music Company",
                Channel:"Zee Music Company",
                views:"101M views",
                id:"9"
    
            },
            {
                thumbnail:"https://i.ytimg.com/vi/TFeO2fFXKzs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCEJVBTlohUsypGa_P4lhBpuIbX2A",
                title:"[Get APP Now] ENGSUB [Falling Into Your Smile] Starring: Xu Kai/Cheng Xiao/Zhai Xiaowen | YOUKU",
                Channel:"MULTISUB",
                views:"88M views",
                id:"10"
    
            },
            {
                thumbnail:"https://i.ytimg.com/vi/8EPJiFfWRfw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAYgtUdQKI6OEAZ4tED8fTfIhhRtg",
                title:"SatyaPrem Ki Katha|Official Trailer|Kartik|Kiara|Sameer V|Sajid Nadiadwala",
                Channel:"NadiawalaGrandson",
                views:"6M views",
                id:"11"

    
            },
            {
                thumbnail:"https://i.ytimg.com/vi/c2RnR2EDjOk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFfyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCNcyiT6LWTCJkYIB6IP-gof-uznQ",
                title:"TRIANGLE | Hollywood Action Movie In Hindi | Hollywood Hindi Dubbed Action Movie Full by Prime Hindi Movies",
                Channel:"Prime Hindi Movies",
                views:"41M views",
                id:"12"
    
            }
    ]
    )

    let [shorts,setShorts]=useState(
    [
        {
         sthumbnail:"https://i.ytimg.com/vi/fMRSPyyXsgQ/hq720.jpg?sqp=-oaymwEdCJUDENAFSFfyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLC9TOcAB_1cVCJKqHQfWeuqu4WFZA",
         title:"Randeep Rai and Ashi Singh Ramp Walk 😍🔥💫 #ashdeep #AshiSingh #RandeepRai",
         views:"1.1M views"
       },
       {
        sthumbnail:"https://i.ytimg.com/vi/THd7Ijiat2c/oar2.jpg?sqp=-oaymwEaCJUDENAFSFfyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLDDXWB68W2tm1zuaxuRwMN68Gsupg",
        title:"Abhi Akshu ❤️ My fav jodi 😍 #shorts #harshadchopda #yrkkh #pranalirathod #ytshorts #trending #love",
        views:"20M views"
      },
      {
        sthumbnail:"https://i.ytimg.com/vi/i9qX3vSTwy4/oar2.jpg?sqp=-oaymwEaCJUDENAFSFfyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLA2RjtZSGGkVe8Xxnvj4JR58bYgaQ",
        title:"Manike | Thank God | Sonal Devraj x Jiggar Thakkar",
        views:"10M views"
      },
      {
        sthumbnail:"https://i.ytimg.com/vi/2ygMMLk9EKw/oar2.jpg?sqp=-oaymwEaCJUDENAFSFfyq4qpAwwIARUAAIhCcAHAAQY=&rs=AOn4CLCkCjzt70ZFDxO1IUDR03zyS_d5Lw",
        title:"Sukh Kalale Song | Riteish Genelia Deshmukh | Ajay-Atul | #lofi #shorts #shreyaghoshal",
        views:"30M views"
      },
      {
        sthumbnail:"https://i.ytimg.com/vi/RmEHWeF2gaQ/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLC74vSUPmevuEvrx54cG4HTu5jrRg",
       title:"Sidharth Malhotra Kiara advani Beautiful Jodi 👌❤️🥰 Newly married #kiaraadvani #sidharthmalhotra",
        views:"10M views"
    },
    {
        sthumbnail:"https://i.ytimg.com/vi/AOgXa1KXG68/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLDum_HTVQHVuMfk0t9T6u8Xkj_XNA",
        title:"the boys meme  Kohli #viral #tiktok #shorts #virat kholi",
        views:"100M viwes"
    }
     
     
     
]
    )
    
 let removevideo=(id,name)=>{
    setVideos(video.filter((x)=>(x.id!=id)))
alert(name+"video got deleted")
    }

    return ( 
        <div className="Videos">
               <h2>Featured videos</h2>
  <div className="videodata">
  { video.map((data)=>{
return(
    <div className="videodet">
      <img src={data.thumbnail} alt="" />
       <div className="titledetails">
       <h4>{data.title}</h4>
        <h5>{data.Channel}</h5>
        <h5>{data.views}</h5>
        <a href="" onClick={()=>removevideo(data.id,data.channel)}>Remove</a>
       </div>
    </div>
)
     }
        
     )
    }
  </div>
 <div className="shortimg">
  <h1> <img src={shortsimg} style={{height:"100px", width:"130px"}} alt=""/>
  </h1>
  </div>
  
  <div className="short">
  {  shorts.map((y)=>{
    return(
        <div className="shortdet">
            <img src={y.sthumbnail} alt="" />
       <div className="shortdata">
            <h4>{y.title}</h4>
            <h4>{y.views}</h4>
            </div>
        </div>
    )
  }

    )
  }
</div>
</div>  
     );
     }
 
export default Video;