import React, { Component } from 'react';
import './PlayerSubmissionForm.css';

class PlayerSubmissionForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      adjectiveOne: "",
      nounOne: "",
      adverb: "",
      verb: "",
      adjectiveTwo: "",
      nounTwo: "",
    }
  }

  // validations = {
  //   adjectiveOne: /.+/,
  //   nounOne: /.+/,
  //   adverb: /.+/,
  //   verb: /.+/,
  //   adjectiveTwo: /.+/,,
  //   nounTwo: /.+/,
  // }

  fieldValid = (fieldName) => {
    // test returns a boolean, while match returns an array of matching characters or words etc
    return /.+/.test( this.state[fieldName] );
  }
 

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value

    this.setState(field)
  }

  onClickSubmit = (event) => {
    event.preventDefault()

    this.props.onSubmitLineCallback(this.state)
    
    const emptyState = this.state

    Object.keys(emptyState).forEach((key) => {
      emptyState[key] = '';
    })

    this.setState(emptyState);
    // will probably need to clear the state after this when not hard coded!!
  }

  render() {
    const { onSubmitLineCallback, playerNum, finished } = this.props
    const { adjectiveOne, nounOne, adverb, verb, adjectiveTwo, nounTwo } = this.state

    return ( 
      <div className='ConditionalSubmissionForm'>
        {
          !finished && (
            <div className="PlayerSubmissionForm">
              <h3>Player Submission Form for Player #{playerNum}</h3>

              <form 
                onSubmit={this.onClickSubmit} 
                className="PlayerSubmissionForm__form" >
                <div className="PlayerSubmissionForm__poem-inputs">
                  <label htmlFor="adjectiveOne">The </label>
                  <input
                    className={this.fieldValid('adjectiveOne') ? null : 'PlayerSubmissionFormt__input--invalid' }
                    name='adjectiveOne'
                    placeholder="adjective"
                    type="text"
                    onChange={this.onChangeHandler}
                    value={adjectiveOne}/>
                  <input
                    className={this.fieldValid('nounOne') ? null : 'PlayerSubmissionFormt__input--invalid' }
                    name='nounOne'
                    placeholder="noun"
                    type="text" 
                    onChange={this.onChangeHandler}
                    value={nounOne}/>
                  <input
                    className={this.fieldValid('adverb') ? null : 'PlayerSubmissionFormt__input--invalid' }
                    name='adverb'
                    placeholder="adverb"
                    type="text" 
                    onChange={this.onChangeHandler}
                    value={adverb}/>
                  <input
                    className={this.fieldValid('verb') ? null : 'PlayerSubmissionFormt__input--invalid' }
                    name='verb'
                    placeholder="verb"
                    type="text" 
                    onChange={this.onChangeHandler}
                    value={verb}/>
                  <label htmlFor="adjectiveOne">the </label>
                  <input
                    className={this.fieldValid('adjectiveTwo') ? null : 'PlayerSubmissionFormt__input--invalid' }
                    name='adjectiveTwo'
                    placeholder="adjective"
                    type="text" 
                    onChange={this.onChangeHandler}
                    value={adjectiveTwo}/>
                  <input
                    className={this.fieldValid('nounTwo') ? null : 'PlayerSubmissionFormt__input--invalid' }
                    name='nounTwo'
                    placeholder="noun"
                    type="text" 
                    onChange={this.onChangeHandler}
                    value={nounTwo}/>
                </div>

                <div className="PlayerSubmissionForm__submit">
                  <input type="submit" value="Submit Line" className="PlayerSubmissionForm__submit-btn" />
                </div>
              </form>
            </div>
          )
        }
      </div>
    );
  }
}

export default PlayerSubmissionForm;
