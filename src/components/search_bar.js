import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={term: ''};
    // this.onInputChange = this.onInputChange.bind(this);
  }

  render () {
    return (
      <div className="search-bar">
        {/*  <h3>{!!this.state.term ? this.state.term.toUpperCase() : "GANEY"}</h3><br /><br />  */}
        <input className='form-control' value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    // console.log(event.target.value);
    this.setState({term});
    this.props.onSearchTermChange(term)
  }


}

export default SearchBar;
