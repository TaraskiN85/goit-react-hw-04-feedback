import { Component } from 'react'
import Section from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from './components/Statistics/Statistics'
import css from './components/App.module.css'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      }
    })
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad
  
  countPositiveFeedbackPercentage = () => Math.round(this.state.good / this.countTotalFeedback() * 100)

  render() {

    return (
      <div className={css.container}>
        <Section title='Please Leave Feedback'>
          
        <FeedbackOptions
          options={Object.getOwnPropertyNames(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        </Section>

        <Section title='Statistics'>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    )
  };
};
