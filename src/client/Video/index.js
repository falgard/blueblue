import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Parallax } from 'react-parallax'

import mainStyles from '../App.scss'
import styles from './Video.styles.scss'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      animate: false,
      small: props.size.small
    }
  }

  renderBackground(bgClasses, captionClasses) {
    if (this.state.small) {
      return (
        <Parallax bgImage={'../../images/varvet2.jpg'} strength={300} bgHeight={'700px'}>
          <div className={captionClasses}>
            <p>Blå blå är kärleken</p>
          </div>
          <div style={{ height: '700px' }} />
        </Parallax>)
    }
     return (<div className={bgClasses}>
        <div className={captionClasses}>
            <p>Blå blå är kärleken</p>
        </div>
      </div>
    )
  }

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet2]: true,
      [mainStyles.small]: this.state.small
    })

    const captionClasses = classNames({
      [mainStyles.caption]: true,
      [mainStyles.small]: this.state.small
    })

    const holderClasses = classNames({
      [styles.holder]: true,
      [styles.small]: this.state.small
    })
    
    return (
      <section id={this.props.id}>

        {this.renderBackground(imageClasses, captionClasses)}

        <div className={holderClasses}>
          <iframe frameBorder="0" scrolling="0" height="100%" width="100%" src="https://diftv.solidtango.com/widgets/embed/dw79ss3f" allowFullScreen></iframe>
        </div>
    </section>
    )
  }
}