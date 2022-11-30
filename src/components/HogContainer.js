import React, {useState} from 'react'
import HogTile from "./HogTile"

function HogContainer({ hogs }) {
  const [chosenFilter, setChosenFilter] = useState('all')
  const renderHogs = filterHogs().map(hog => <HogTile key={hog.name} hog={hog}/>)
  

  function handleChange(e){
    // console.log(e.target.value)
    setChosenFilter(e.target.value)
  }

  function filterHogs() {
    if(chosenFilter === 'greased') {
      return hogs.filter(hog => hog.greased)
    } else if(chosenFilter === 'not greased') {
      return hogs.filter(hog => !hog.greased)
    } else {
      return hogs
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option value='all'>all</option>
        <option value='greased'>greased</option>
        <option value='not greased'>not greased</option>
      </select>
      {renderHogs}
    </div>
  )
}

export default HogContainer;
