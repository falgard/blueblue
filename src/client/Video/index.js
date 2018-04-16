import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'

import mainStyles from '../App.scss'
import styles from './Video.styles.scss'

export default class Video extends React.Component {
  constructor(props) {
    super(props)    
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      animate: false
    }
  }

  handleResize() {
    console.log('asd');
  }
  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet1]: true
    })
    
    return (
      <section id={this.props.id}>
      <div className={imageClasses}>
        <div className={mainStyles.caption}>
            <span className={mainStyles.border}>Blå blå är kärleken</span>
          </div>
      </div>

      <div className={styles.holder}>
        <iframe frameBorder="0" scrolling="0" height="100%" width="100%" src="https://diftv.solidtango.com/widgets/embed/dw79ss3f" allowFullScreen></iframe>
      </div>
    </section>
    )
  }
}