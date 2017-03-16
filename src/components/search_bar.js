import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state={term: ''};
    // this.onInputChange = this.onInputChange.bind(this);
  }

  render () {
    return (
      <div ><h3>GlueTube</h3>
        <div className="search-bar">
          {/*  <h3>{!!this.state.term ? this.state.term.toUpperCase() : "GANEY"}</h3><br /><br />  */}
          <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-cell mdl-cell--12-col">
            <input className="mdl-textfield__input" type="text" id="sample3" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
            <label className="mdl-textfield__label">GlueTube Search...</label>
          </div>
        </div>
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
