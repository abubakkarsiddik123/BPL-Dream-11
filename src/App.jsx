import { Suspense, useState } from 'react';
import './App.css'
import Banner from './Components/navbar/homePage/banner/Banner'
import Player from './Components/navbar/homePage/player/Player';
import NavBar from './Components/navbar/NavBar'


const fetchPlayer=async ()=>{
  const res = await fetch ("/Data.json");
  return res.json();
}


function App() {
    const [coin,setCoin]=useState(5000)
const playersPromise = fetchPlayer();

  return (
    <>
      {/* <h2 className='text-4xl text-red-500'>hello react</h2> */}
      <NavBar coin={coin}></NavBar>
      <Banner></Banner>
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <Player setCoin={setCoin} coin={coin} playersPromise={playersPromise}></Player>
      </Suspense>
    </>
  )
}

export default App
