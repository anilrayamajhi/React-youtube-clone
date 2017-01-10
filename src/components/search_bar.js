import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={term: ''};
    // this.onInputChange = this.onInputChange.bind(this);
  }

  render () {
    return (
      <div>
        <h3>{!!this.state.term ? this.state.term.toUpperCase() : "GANEY"}</h3><br /><br />
        <input className='form-control' value={this.state.term} onChange={this.onInputChange.bind(this)} />
      </div>
    )
  }

  onInputChange(event) {
    // console.log(event.target.value);
    this.setState({term: event.target.value})
  }


}

export default SearchBar;
