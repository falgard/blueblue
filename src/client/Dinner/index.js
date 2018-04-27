import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Waypoint from 'react-waypoint'
import { Parallax } from 'react-parallax'

import mainStyles from '../App.scss'
//import styles from './Dinner.styles.scss'

export default class Dinner extends React.Component {
  constructor(props) {
    super(props)    
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)

    this.state = {
      animate: false,
      small: props.size.small
    }
  }

  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  }

  renderBackground(bgClasses) {
    if (this.state.small) {
      return (
        <Parallax bgImage={'../../images/varvet.jpg'} strength={300} bgHeight={'900px'} bgStyle={{left:'-30%'}}>
        <div className={mainStyles.caption}>
            <p>Middag</p>
          </div>
        <div style={{ height: '700px' }} />
        </Parallax>)
    }
     return (<div className={bgClasses}>
        <div className={mainStyles.caption}>
          <p>Middag</p>
        </div>
      </div>
    )
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet1]: true,
      [mainStyles.small]: this.state.small,
    })

    const animate = this.state.animate
    const animateBoxWaypoint = classNames({
      [mainStyles.small]: this.state.small,
      'animated': animate,
      'fadeInUp': animate
    })

    const infobox = classNames({
      [mainStyles.small]: this.state.small,
      [mainStyles.info]: true
    })
  
    return (
      <section id={this.props.id}>
      
      {this.renderBackground(imageClasses)}

      <div className={mainStyles.holder}>
      <div className={animateBoxWaypoint}>
          <Waypoint onEnter={this.handleWaypointEnter} />
          <div className={infobox}>
            <img className={mainStyles.icon} src="images/icons/toast.svg"/>
            <p>Efter vigseln har vi ordnat transport från strandvägen till varvet där middagen kommer att hållas. <a href="mailto:lise">Lise Wetzel</a> och <a href="mailto:chris">Christofer Holmgren</a> är toastmasters, meddela dom i fall ni vill uppträda och eventuella allergier/vegetarianer.</p>
          </div>
        </div>
      </div>
      </section>
    )
  }
}