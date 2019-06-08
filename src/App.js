import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'

import ProfileData from './components/ProfileData'
import Switch from './components/Switch'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [],
			index: 0
    }
  }

  componentWillMount() {
    this.setState({
			candidates: data.data
		})
  }

  handleCheck(id, val) {
    const candidates = this.state.candidates.slice()
    candidates[id].hired = val;
    this.setState({
			candidates
		})
  }

	showNextCandidate(button) {
		let index = this.state.index
		const count = this.state.candidates.length - 1
		if (index < count) {
			this.setState({
				index: ++index
			})
		}
	}

	showPreviousCandidate(button) {
		let index = this.state.index
		if (index !== 0) {
			this.setState({
				index: --index
			})
		}
	}

  render () {
		const candidates = this.state.candidates
		const index = this.state.index
    return (
      <main>
        <section>
					<Switch direction={"left"} clickHandler={evt => this.showPreviousCandidate(evt.target)} />
					<ProfileData
            data={candidates[index]}
            handleCheck={evt => this.handleCheck(index, evt.target.checked)}
          />
					<Switch direction={"right"} clickHandler={evt => this.showNextCandidate(evt.target)} />
        </section>
      </main>
    )
  }
}

export default App
