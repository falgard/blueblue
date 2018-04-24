import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './Footer.styles.scss'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)    
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      animate: false,
      small: props.size.small
    }
  }

  handleResize() {
  }
  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet2]: true,
      [mainStyles.small]: this.state.small
    })
    
    const infoClasses = classNames({
      [styles.info]: true,
      [styles.small]: this.state.small
    })

    const gridClasses = classNames({
      [styles.grid]: true,
      [styles.small]: this.state.small
    })

    return (
      <section id={this.props.id}>    
        <div className={infoClasses}>
            <div className={gridClasses}>
              <img className={styles.date} src="images/icons/wedding-day.svg"/> 
              <p>28e Juli 2018 13:00<br />
              Hedvig Eleonora Kyrka</p>
            </div>
            <div className={gridClasses}>
              <img className={styles.couple} src="images/icons/couple.svg"/>
              <p>Cissi (0704673134) <br />
              Micke (0738370005) </p>
            </div>
        </div>
    </section>
    )
  }
}