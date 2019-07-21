import React, { useState, useEffect } from 'react';
import './App.scss';

import ProfileData from './components/ProfileData'
import Switch from './components/Switch'
import { SWITCH_SIDES, saveToLocalStorage, checkStorage, requestData } from './utils'


const App = () => {
  const [candidates, setCandidates] = useState([])
	const [index, setIndex] = useState(0)

	useEffect(() => {
		async function fetchData() {
			const { data } = await requestData()
			setCandidates(data)
			setIndex(parseInt(checkStorage()))
		}

		fetchData()
	}, []);

	const handleCheck = (id, val) => {
    const updatedCandidates = candidates.slice()
    updatedCandidates[id].hired = val
    setCandidates(updatedCandidates)
  }

	const showNextCandidate = () => {
		const count = candidates.length - 1
		if (index < count) {
			setIndex(index + 1)
			saveToLocalStorage(index + 1)
		}
	}

	const showPreviousCandidate = () => {
		if (index !== 0) {
			setIndex(index - 1)
			saveToLocalStorage(index - 1)
		}
	}

  return (
    <main>
      <section className="app">
				{candidates.length > 0 &&
					<>
						<Switch
							direction={SWITCH_SIDES.left}
							clickHandler={() => showPreviousCandidate()}
							disabled={index === 0}
						/>
						<ProfileData
							data={candidates[index]}
							handleCheck={evt => handleCheck(index, evt.target.checked)}
						/>
						<Switch
							direction={SWITCH_SIDES.right}
							clickHandler={() => showNextCandidate()}
							disabled={index === candidates.length - 1}
						/>
					</>
				}
      </section>
    </main>
  )
}

export default App
