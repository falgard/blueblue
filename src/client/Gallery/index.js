import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Countdown from 'react-countdown-now';
import Waypoint from 'react-waypoint'
import PhotoGallery from 'react-photo-gallery';

import mainStyles from '../App.scss'
import styles from './Gallery.styles.scss'

export default class Gallery extends React.Component {
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

    const photos = PHOTO_SET.sort(() => {return 0.5 - Math.random()}).slice(0, 9);
    
    return (
      <section id={this.props.id}>
      <div className={styles.gallery}>
        <PhotoGallery photos={photos} margin={2} columns={5} />
      </div>
    </section>
    )
  }
}

const PHOTO_SET = [
  {
    src: 'images/gallery/1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/2.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/3.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/4.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/5.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/8.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/9.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/10.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/11.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/12.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/13.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/15.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/16.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/17.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/19.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/20.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/21.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/23.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/24.jpg',
    width: 3,
    height: 4
  },  
  {
    src: 'images/gallery/25.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/26.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/27.jpg',
    width: 1,
    height: 1
  },
  {
    src: 'images/gallery/28.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/29.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/30.jpg',
    width: 5,
    height: 3
  },
  {
    src: 'images/gallery/31.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'images/gallery/32.jpg',
    width: 3,
    height: 4
  },
  {
    src: 'images/gallery/33.jpg',
    width: 4,
    height: 3
  }
];