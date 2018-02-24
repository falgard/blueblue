import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './WeddingDay.styles.scss'

export default class WeddingDay extends React.Component {
  constructor(props) {
    super(props)    
    // this.handleWaypointEnter = this.handleWaypointEnter.bind(this)

    this.state = {
      animate: false
    }
  }

  // handleWaypointEnter() {
  //   console.log('waypoint - weddingday')
  //   this.setState({
  //     animate: true
  //   })
  // }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet3]: true
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      [mainStyles.caption]: true,
      [styles.caption]: true,
      'animated': animate,
      'fadeInUp': animate
    })
  
    const Completionist = () => <span>Hipp hipp hurra!</span>;
  
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <Completionist />;
      } else {
        return (
          <div className={styles.countdown}>
            <span>{days}<small>days</small></span>
            <span>{hours}<small>hours</small></span>
            <span>{minutes}<small>minutes</small></span>
            <span>{seconds}<small>seconds</small></span>
          </div>
        );
      }
    };
  
    return (
      <section id={this.props.id}>
        <div className={imageClasses}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={animateBoxWaypoint}>
              <Countdown date={'Sat, 28 Jul 2018 13:00:00'} renderer={renderer}/>
          </div>
        </div>
      </section>
    )
  }
}