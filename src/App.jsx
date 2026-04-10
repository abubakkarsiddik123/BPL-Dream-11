import { Suspense } from 'react';
import './App.css'
import Banner from './Components/navbar/homePage/banner/Banner'
import Player from './Components/navbar/homePage/player/Player';
import NavBar from './Components/navbar/NavBar'


const fetchPlayer=async ()=>{
  const res = await fetch ("/Data.json");
  return res.json();
}


function App() {
const playersPromise = fetchPlayer();

  return (
    <>
      {/* <h2 className='text-4xl text-red-500'>hello react</h2> */}
      <NavBar></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Player playersPromise={playersPromise}></Player>
      </Suspense>
    </>
  )
}

export default App
