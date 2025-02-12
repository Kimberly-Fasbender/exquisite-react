import React, { Component } from 'react';
import './Game.css';
import PlayerSubmissionForm from './PlayerSubmissionForm';
import FinalPoem from './FinalPoem';
import RecentSubmission from './RecentSubmission';

class Game extends Component {

  constructor(props) {
    super(props);

    this.state = {
      submissions: [],
      finished: false,
    }
  }


  // converts submissions from object to string
  submissionToString = (submission) => {
    let string = ''

    Object.values(submission).forEach((word, i) => {
      string = `${string} ${word} `;
      if ( i === 3 ) {
        string += 'the ';
      };
    });
    
    string = `The ${string}.`
    return string;
  }

  onSubmitLine = (submission) => {
    
    const submissions = this.state.submissions
    submissions.push(this.submissionToString(submission))

    this.setState({
      submissions,
    })
  }

  onFinished = () => {
    const newState = !this.state.finished

    this.setState({
      finished: newState
    });
  }

  render() {
    const { submissions, finished} = this.state

    const exampleFormat = FIELDS.map((field) => {
      if (field.key) {
        return field.placeholder;
      } else {
        return field;
      }
    }).join(" ");

    return (
      <div className="Game">
        <h2>Game</h2>

        <p>Each player should take turns filling out and submitting the form below. Each turn should be done individually and <em>in secret!</em> Take inspiration from the revealed recent submission. When all players are finished, click the final button on the bottom to reveal the entire poem.</p>

        <p>Please follow the following format for your poetry submission:</p>

        <p className="Game__format-example">
          { exampleFormat }
        </p>

        <RecentSubmission 
          mostRecentSubmission={submissions[submissions.length - 1]}
          finished={finished}
        />

        <PlayerSubmissionForm 
          playerNum={submissions.length + 1}
          onSubmitLineCallback={this.onSubmitLine}
          finished={finished}
        />

        <FinalPoem 
          submissions={submissions}
          onFinishedCallback={this.onFinished}
          finished={finished}
        />

      </div>
    );
  }
}

const FIELDS = [
  "The",
  {
    key: 'adj1',
    placeholder: 'adjective',
  },
  {
    key: 'noun1',
    placeholder: 'noun',
  },
  {
    key: 'adv',
    placeholder: 'adverb',
  },
  {
    key: 'verb',
    placeholder: 'verb',
  },
  "the",
  {
    key: 'adj2',
    placeholder: 'adjective',
  },
  {
    key: 'noun2',
    placeholder: 'noun',
  },
  ".",
];

export default Game;
