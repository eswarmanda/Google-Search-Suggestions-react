import {Component} from 'react'

import './index.css'

import List from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput),
    )

    const onSelectItem = id => {
      console.log(`${id} selected`)
      const selectedItem = searchResult.filter(each => each.id === id)
      const resValue = selectedItem[0].suggestion
      console.log(resValue)
      this.setState({searchInput: resValue})
    }

    console.log(searchInput)
    return (
      <div className="main-cont">
        <div className="card">
          <div className="logo">
            <img
              className="google-logo"
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
            />
          </div>

          <div className="status-card">
            <div className="search-box">
              <img
                className="search-logo"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
              />
              <input
                className="input"
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="ul-list">
              {searchResult.map(eachItem => (
                <List
                  itemDetails={eachItem}
                  key={eachItem.id}
                  onSelect={onSelectItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
