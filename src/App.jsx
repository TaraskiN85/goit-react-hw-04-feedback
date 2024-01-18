import { useState } from 'react'

import { Section } from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from './components/Statistics/Statistics'

import css from './components/App.module.css'

export const App = ()=> {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = (option) => {
    if (option === 'good') setGood(good + 1)
    if (option === 'neutral') setNeutral(neutral + 1)
    if (option === 'bad') setBad(bad + 1)
  }

  const countTotalFeedback = () => good + neutral + bad
  
  const countPositiveFeedbackPercentage = () => Math.round(good / countTotalFeedback() * 100)

    return (
      <div className={css.container}>
        <Section title='Please Leave Feedback'>
          
        <FeedbackOptions
          options={Object.getOwnPropertyNames({good, neutral, bad})}
          onLeaveFeedback={onLeaveFeedback}
        />
        </Section>

        <Section title='Statistics'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    )
};
