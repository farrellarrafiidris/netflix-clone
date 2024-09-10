import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const navigate = useNavigate()

  const {id} = useParams();

  const [apiData, setApiData] = useState({
    name : "",
    key: "",
    published_at:"",
    typeof: "",
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGVhNDc3MmVhM2VmNjFlNDgzYThhMDViYmQ3MGRkZCIsIm5iZiI6MTcyNTg2NTU4OC42NTM4OTcsInN1YiI6IjY2ZGU3OWEwYTU1NjU2OGRlZDNhZDdkNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FL7ViAML5oxTO9EBJwoTpnrTSpD2kc1v3Bm1u6RgFxA'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err))
    console.log()
  },[])

  
  
  return (
    <div className='player'>
      <img onClick={()=> {
        navigate(-2)
      }} src={back_arrow_icon}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='Trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
