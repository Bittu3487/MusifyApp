import {useState , useEffect , useRef} from 'react';
import Playerdetails from './Playerdetails';
import Playercontrol from './Playercontrol';

const Player = (props) => {
  const audioEl = useRef(null);
  const [isPlaying , setIsPlaying] = useState(false);
  useEffect(()=>{
    if (isPlaying){
      audioEl.current.play();
    } else{
      audioEl.current.pause();
    }
  });
  const SkipSong = (forwards = true)=>{
    if (forwards){
      props.setCurrentsong(()=>{
        let temp = props.currentSong;
        temp++;
        if(temp > props.songs.length - 1){
          temp = 0;
        }
        return temp;
      });
    } else{
      props.setCurrentsong(()=>{
        let temp = props.currentSong;
        temp--;
        if(temp < 0){
          temp = props.songs.length -1;
        }
        return temp;
      });
    }
  }
  return (
    <div className='c-player'>
        <audio src={props.songs[props.currentSong].src} ref={audioEl}></audio>
        <h4>Playing now</h4>
        <Playerdetails song={props.songs[props.currentSong]}/>
        <Playercontrol isPlaying={isPlaying} setIsPlaying={setIsPlaying} SkipSong={SkipSong}/>
        <p>Next up: <span>{props.songs[props.nextSong].title} by {props.songs[props.nextSong].artist}</span></p>
    </div>
  )
}

export default Player