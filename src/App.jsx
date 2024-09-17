import { useState , useEffect } from 'react';
import Player from './components/player';
import Footer from './components/Footer';

function App() {
  const [songs] = useState([
    {
      title:'Aaj Ki Raat',
      artist:"Sachin-Jigar,Madhubanti Bagchi",
      img_src:"./images/ajkirat.jpg",
      src:"./song/Aaj Ki Raat(PagalWorld.com.sb).mp3"
    },
    {
      title:"Desi KalaKaar",
      artist:"Yo Yo Honey Singh",
      img_src:"./images/img6.jpg",
      src:"./song/Desi Kalakaar - Desi Kalakaar 128 Kbps.mp3"
    },
    {
      title:"nadaaniyan",
      artist:"Akshath",
      img_src:"./images/img3.jpg",
      src:"./song/Nadaaniyan(PagalNew.Com.Se).mp3"
    },
    {
      title:"Nobita and the Steel Troops",
      artist:"Sonal Kaushal",
      img_src:"./images/doraemon.jpg",
      src:"./song/_Doraemon_Steel_Troops_Sabse_Pehle_Hai_Pyaar_Ringtone_(by Fringster.com).mp3"
    },
    {
      title:"Nobita's Little Space War",
      artist:"Tetsuya Takeda",
      img_src:"./images/doraemon.jpg",
      src:"./song/Shounen Ki - Doraemon.mp3"
    },
    {
      title:"Mere Tan Mein Ram",
      artist:"Debashish Dasgupta, Shailendra Bharti",
      img_src:"./images/ramsiya.jpg",
      src:"./song/Mere-Tan-Man-Dhadkan-Mein-Siya-Ram-Hai(PagalWorld).mp3"
    },
    {
      title:"Ram Siya Ram",
      artist:"Ajay-Atul, Parampara Thakur",
      img_src:"./images/ram.jpg",
      src:"./song/Ram Siya Ram - Adipurush 128 Kbps.mp3"
    },
    {
      title:"Sajni",
      artist:"Arijit Singh",
      img_src:"./images/arijit.jpg",
      src:"./song/Sajni - Laapataa Ladies 128 Kbps.mp3"
    },
    {
      title:"Kala Chasma",
      artist:"Amar Arshi",
      img_src:"./images/kalachasma.webp",
      src:"./song/Tainu Kala Chashma - JSL.mp3"
    },
    {
      title:"Kun Faaya Kun",
      artist:"A.R. Rahman",
      img_src:"./images/img1.jpg",
      src:"./song/old_Rockstar-Kun Faaya Kun.mp3"
    },
    {
      title:"Main Yahaan Hoon",
      artist:"Udit Narayan",
      img_src:"./images/uditnarayan1 (1).jpg",
      src:"./song/Main Yahaan Hoon - Veer-Zaara 128 Kbps.mp3"
    },
    {
      title:"Teri Mitti",
      artist:"Arijit Singh",
      img_src:"./images/kesari.jpg",
      src:"./song/new_192_Teri Mitti - Tribute - B Praak.mp3"
    },
    {
      title:"Apna Bana Le",
      artist:"Arijit Singh",
      img_src:"./images/arijit.jpg",
      src:"./song/new_192_Teri Mitti - Tribute - B Praak.mp3"
    }

  ]);
  const [currentSong , setCurrentsong] = useState(0);
  const [nextSong , setnextSong] = useState(0);
  useEffect(() => {
    setnextSong(() => {
      if (currentSong + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSong + 1;
      }
    });
  }, [currentSong]);

  return (
    <>
      <div className='App'>
        <Player
        currentSong = {currentSong}
        setCurrentsong = {setCurrentsong}
        nextSong ={nextSong}
        songs={songs}
        />
      </div>
      <Footer/>
    </>
  )
}

export default App
