import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import mainStyles from '../App.scss'
import styles from './WeddingDay.styles.scss'

  const WeddingDaySection = props => {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet3]: true
    })

    const animationClasses = classNames({
      [mainStyles.caption]: true,
      'animated': true,
      'fadeInUp': true
    })

  return (
    <section id={props.id}>
      <div className={imageClasses}>
        <div className={animationClasses}>
          <p id="countdown" className="countdown">
            <span id="days"></span>
            <span id="hours"></span>
            <span id="minutes"></span>
            <span id="seconds"></span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default WeddingDaySection
