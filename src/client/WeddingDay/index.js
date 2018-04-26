import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';

import mainStyles from '../App.scss'
import styles from './WeddingDay.styles.scss'

export default class WeddingDay extends React.Component {
  constructor(props) {
    super(props)    

    this.state = {
      animate: false,
      small: props.size.small
    }
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet3]: true,
      [mainStyles.small]: this.state.small,
      [styles.small]: this.state.small
    })

    const completeClasses = classNames({
      [styles.countdown]: true,
      [styles.complete]: true
    })
  
    const Completionist = () => <div className={completeClasses}><span>Hipp hipp hurra!</span></div>;
  
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completionist />;
      } else {
        return (
          <div className={styles.countdown}>
            <span>{days}<small>dagar</small></span>
            <span>{hours}<small>timmar</small></span>
            <span>{minutes}<small>minuter</small></span>
            <span>{seconds}<small>sekunder</small></span>
          </div>
        );
      }
    };
  
    return (
      <section id={this.props.id}>
        <div className={imageClasses}>
            <Countdown date={'Sat, 28 Jul 2018 13:00:00'} renderer={renderer}/>
        </div>
      </section>
    )
  }
}