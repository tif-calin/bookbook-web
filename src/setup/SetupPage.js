import { Component } from 'react';
import BookSuggest from './BookSuggest';
import './SetupPage.css';

export default class SetupPage extends Component {
  
  render() {
    return (
      <div className="SetupPage">
        <h3 class="page-title">setup ballot</h3>
        <form className="page">
          <span class="panel-title">1. setup</span>
          <fieldset className="panel">
            <label>
              <span>Ballot Name:</span>
              <input name="ballot" required={true}/>
            </label>
            <label>
              <span>Admin Code:</span>
              <input name="admin"/>
            </label>
          </fieldset>
          <span class="panel-title">2. permissions (optional)</span>
          <fieldset className="panel">
            <label>
              <span>Require Voting Code</span>
              <input/>
            </label>
          </fieldset>
          <span class="panel-title">3. add books</span>
          <fieldset className="panel">
            <BookSuggest/>
          </fieldset>
          <button>create ballot</button>
        </form>
        
      </div>
    );
  }

}