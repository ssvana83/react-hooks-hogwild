import React, {useState} from 'react'
import HogTile from "./HogTile"

function HogContainer({ hogs }) {
  const [chosenFilter, setChosenFilter] = useState('all')
  const [chosenSort, setChosenSort] = useState('none')
  const renderHogs = filterHogs().map(hog => <HogTile key={hog.name} hog={hog}/>)
  

  function handleChange(e){
    setChosenFilter(e.target.value)
  }


  function handleSortChange(e) {
    setChosenSort(e.target.value)
  }


  function filterHogs() {
    if(chosenFilter === 'greased') {
      return sortHogs().filter(hog => hog.greased)
    } else if(chosenFilter === 'not greased') {
      return sortHogs().filter(hog => !hog.greased)
    } else {
      return sortHogs()
    }
  }


  function sortHogs() {
    if(chosenSort === 'weight') {
      return (hogs.sort((hogA, hogB) => hogA.weight - hogB.weight ))
      } else if (chosenSort === 'name') {
        return (hogs.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name)))
      } else {
        return hogs
      }
    }


  return (
    <div>
      Filter: <select onChange={handleChange}>
        <option value='all'>all</option>
        <option value='greased'>greased</option>
        <option value='not greased'>not greased</option>
      </select>
      Sort: <select onChange={handleSortChange}>
        <option value='none'>none</option>
        <option value='name'>name</option>
        <option value='weight'>weight</option>
      </select>
      {renderHogs}
    </div>
  )
}

export default HogContainer;
