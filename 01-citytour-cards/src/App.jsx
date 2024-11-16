import data from './data'
import './App.css'
import Tours from './components/Tours'
import Refresh from './components/Refresh'
import { useState } from 'react'

function App() {
  const [tour,setTour] = useState(data);

  function removeTour(id){
    const newTours = tour.filter((tour)=> tour.id != id);
    setTour(newTours);
  }

  if(tour.length==0){
    return(
      <Refresh setTour={setTour} data={data}/>
    )
  }
  
  return (
  
      <div>
        <Tours tours={tour} removeTour={removeTour}></Tours>
      </div>

  )
}

export default App
