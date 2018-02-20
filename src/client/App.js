import React, { Component } from 'react'
import styles from './App.scss'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import ScrollToTop from './Utils/ScrollToTop'
import StartBanner from './StartBanner/StartBanner'

import DocumentMeta from 'react-document-meta'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.handleResize = this.handleResize.bind(this)
    const width = window.innerWidth

    this.state = {
      hasScrolled: false,
      size: {
        small: width <= 576,
        medium: width > 576 && width <= 992,
        large: width > 992 && width <= 1200,
        xlarge: width > 1200
      }
    }

    this.resize = undefined
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  handleResize() {
    clearTimeout(this.resize)
    this.resize = setTimeout(() => {
      const width = window.innerWidth
      this.setState({
        size: {
          small: width <= 576,
          medium: width > 576 && width <= 992,
          large: width > 992 && width <= 1200,
          xlarge: width > 1200
        }
      })
    }, 150)
  }

  StartPage(size) {
    const meta = {
      title: 'Blå blå är kärleken - Cissi & Micke',
      description: 'Blå blå är kärleken'
    }

    return (
      <DocumentMeta {...meta}>
        <StartBanner id='start' size={size} />
      </DocumentMeta>
    )
  }

  render() {
    return (
      <Router>
        <ScrollToTop>
          <Route exact path='/' component={() => this.StartPage(this.state.size)} />
        </ScrollToTop>
      </Router>
    )
  }
}