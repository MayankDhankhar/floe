import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import fetch from './fetch'
import Character from './Character'
import { STATUS } from './enums/FilterType';


export default function Characters() {
  const [personFlags, setPersonFlags] = useState(new Array(20).fill(false))
  const [filterValue, setFilterValue] = useState(STATUS.ALL)
  const { status, data } = useQuery({
    queryKey: ['characters'],
    queryFn: () => fetch('https://rickandmortyapi.com/api/character/'),
  })

  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error :(</p>


  return (
    <>
    <select className="relative flex-row bg-gray-50" name="filter" id="0" onChange={(evt) => {
        setFilterValue(evt.target.value as STATUS)
      }}>
        <option key={STATUS.ALL} value={STATUS.ALL}>
            {STATUS.ALL}
        </option>
        <option key={STATUS.ALIVE} value={STATUS.ALIVE}>
            {STATUS.ALIVE}
        </option>
        <option key={STATUS.UNKNOWN} value={STATUS.UNKNOWN}>
            {STATUS.UNKNOWN}
        </option>
        <option key={STATUS.DEAD} value={STATUS.DEAD}>
            {STATUS.DEAD}
        </option>
      </select>

      <h1 className="text-3xl font-bold underline">Characters</h1>
      <div>
      {data.results.map((person) => {
        return (
          <div key={person.id} onClick={() => {
            setPersonFlags((prevPerson) => prevPerson.map((val, index) => {
              if ((person.id - 1) === index) {
                val = !val;
              }
              return val;
            }))
          }}>

            {filterValue === STATUS.ALL ? <>
                {person.name} - {person.gender}: {person.species}
                {personFlags[person.id - 1] ? <Character {...person} /> : <div></div>}
                </> : (filterValue === person.status) ? <>
                {person.name} - {person.gender}: {person.species}
                {personFlags[person.id - 1] ? <Character {...person} /> : <div></div>}
                </> : <></>}

          </div>
        )
      })}
    </div>
    </>
  )
}
