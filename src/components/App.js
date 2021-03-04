import React from 'react';
import SearchBar from './SearchBar'
//Class based componed because its holding state for entire application 

class App extends React.Component{
  render(){
    return (
      <div className="ui container"> 
        <SearchBar/> 
      </div>
    );
  }
};

export default App;