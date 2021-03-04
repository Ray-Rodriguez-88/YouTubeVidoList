import React from 'react';

class SearchBar extends React.Component{
  state = { term: ' '}

  onInputChange = (event) => {
    this.setState({ term: event.target.value});
  };
  //onInputChange callback function can be done in line like so ... onChange={e => this.setState({ term: e.target.value})}

  onFormSubmit = event => {
    event.preventDefault();

  };
  // event does not need to be in parenthesis React knows. 
  
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Video Search </label>
            <input 
              type="text" 
              value={this.state.term}
              onChange={this.onInputChange}
            /> 
          </div>
        </form>

      </div>
      );
  };
};

export default SearchBar;