import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.json'

import DataList from './components/DataList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      candidates: [],
      selected: 0
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
		});
  }

  render () {
    return (
      <main>
        <section>
          <DataList
            data={this.state.candidates[0]}
            handleCheck={(evt) => this.handleCheck(0, evt.target.checked)}
          />
        </section>
      </main>
    )
  }
}

export default App;
