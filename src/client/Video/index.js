import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'
import Gallery from 'react-photo-gallery';

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
  }
  handleWaypointEnter() {
    this.setState({
      animate: true
    })
  };

  render() {
    const imageClasses = classNames({
      [mainStyles.bg__img]: true,
      [mainStyles.bg__img_varvet2]: true
    })
    
    return (
      <section id={this.props.id}>
      <div className={imageClasses}>
        <div className={mainStyles.caption}>
            <span className={mainStyles.border}>Blå blå är kärleken</span>
        </div>
      </div>

      {/* <div className={styles.gallery}>
        <Gallery photos={PHOTO_SET} margin={2} />
      </div> */}

      <div className={styles.holder}>
        <iframe frameBorder="0" scrolling="0" height="100%" width="100%" src="https://diftv.solidtango.com/widgets/embed/dw79ss3f" allowFullScreen></iframe>
      </div>
    </section>
    )
  }
}

const PHOTO_SET = [
  {
    src: 'images/gallery/1.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/2.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/3.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/4.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/5.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/6.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/7.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/8.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/9.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/10.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/11.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/12.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/13.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/14.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/15.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/16.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/17.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/18.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/19.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/20.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/21.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/22.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/23.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/24.jpg',
    width: 4,
    height: 3
  },  {
    src: 'images/gallery/25.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/26.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/27.jpg',
    width: 1,
    height: 1
  }
];