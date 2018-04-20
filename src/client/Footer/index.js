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
      animate: false
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
      [mainStyles.bg__img_varvet2]: true
    })
    
    return (
      <section id={this.props.id}>    
        <div className={styles.info}>
            <p>
                <a href="mailto:mikael.falgard@gmail.com">mikael.falgard@gmail.com</a> | 0738370005
                <img className={styles.ring} src="images/icons/ring.svg"/> 
                <a href="mailto:cecilia.holmgren@hotmail.com">cecilia.holmgren@hotmail.com</a> | 0704673134</p>
        </div>
    </section>
    )
  }
}