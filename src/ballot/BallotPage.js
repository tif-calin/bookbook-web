import { Component } from 'react';
import './BallotPage.css';

const fakeBallot = {
  id: 1,
  adminCode: '1234',
  name: 'bookclub',
  voteCode: null
};

const fakeSuggestions = [
  {
    id: 1,
    username: 'bookperson123',
    title: 'The Fish Warrior',
    ballotId: 1
  },
  {
    id: 2,
    username: 'bookperson123',
    title: 'Crying in H-Mart',
    ballotId: 1
  },
  {
    id: 3,
    username: 'bookperson123',
    title: 'The Confederacy of Dunces',
    ballotId: 1
  }
];

const fakeVotes = [
  {
    username: 'daniella',
    ballotId: 1,
    id: 123,
    vote: '3 1 2'
  },
  {
    username: 'austin',
    ballotId: 1,
    id: 456,
    vote: '1 3 2'
  },
];

export default class BallotPage extends Component {

  state = {
    showAdmin: false,
    ballot: fakeBallot,
    suggestions: fakeSuggestions,
    votes: fakeVotes
  }

  onAdminInput = e => {
    e.preventDefault();

    const input = e.target.value;
    if (input === this.state.ballot.adminCode) {
      this.setState({ showAdmin: true });
    }

  }

  render() {
    return (
      <div className="BallotPage page">
        <h3 className="page-title">ballot: blah blah</h3>
        <span className="panel-title">1. login</span>
        <LoginPanel onAdminInput={this.onAdminInput} />
        <span className="panel-title">2. vote</span>
        <VotingPanel />
        {/*only load adminpanel if showadmin is true, showadmin is true on if the code is entered*/}
        {this.state.showAdmin && <>
          <span className="panel-title">3. admin</span>
          <AdminPanel />
        </>}
      </div>
    );
  }

}

class LoginPanel extends Component {

  handleAdminInput = e => {
    this.props.onAdminInput(e);
  }

  render() {

    return (
      <div className="LoginPanel panel">
        <form>
          <input placeholder="name" />
          <input placeholder="password" />
          <input placeholder="admin code" onChange={this.handleAdminInput} />
        </form>
      </div>
    );
  }

}

class VotingPanel extends Component {

  render() {
    return (
      <div className="VotingPanel panel">
        <p>This ballot uses ranked choice voting to vote.  Please put the books in the order that you most desire to read them.</p>

      </div>
    );
  }

}

class AdminPanel extends Component {

  render() {
    return (
      <div className="AdminPanel panel">
        hello, admin!
        <button>End vote!</button>
      </div>
    );
  }

}