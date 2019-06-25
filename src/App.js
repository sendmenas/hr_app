import React, { useState } from 'react';
import './App.scss';
import data from './data.json'

import ProfileData from './components/ProfileData'
import Switch from './components/Switch'

const App = () => {
  const [candidates, setCandidates] = useState(data.data)
	const [index, setIndex] = useState(0)

  const handleCheck = (id, val) => {
    const updatedCandidates = candidates.slice()
    console.log(updatedCandidates)
    updatedCandidates[id].hired = val
    setCandidates(updatedCandidates)
  }

	const showNextCandidate = () => {
		const count = candidates.length - 1
		console.log(candidates)
		if (index < count) {
			setIndex(index + 1)
		}
	}

	const showPreviousCandidate = () => {
		console.log(candidates)
		if (index !== 0) {
			setIndex(index - 1)
		}
	}

  return (
    <main>
      <section className="app">
        <Switch direction={"left"} clickHandler={() => showPreviousCandidate()} />
        <ProfileData
          data={candidates[index]}
          handleCheck={evt => handleCheck(index, evt.target.checked)}
        />
        <Switch direction={"right"} clickHandler={() => showNextCandidate()} />
      </section>
    </main>
  )
}

export default App
