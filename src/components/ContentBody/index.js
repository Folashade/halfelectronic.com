import React, { Component } from 'react'
import PropTypes from 'prop-types'
import lozard from 'lozad'
import componentStyles from './index.module.css'

if (typeof windows !== 'undefined' && typeof document !== 'undefined') {
  require('intersection-observer')
}

class ContentBody extends Component {
  componentDidMount() {
    lozard().observe()
  }

  render() {
    return (
      <section
        style={this.props.style ? { ...this.props.style } : {}}
        className={componentStyles.wrapper}
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
    )
  }
}

ContentBody.propTypes = {
  body: PropTypes.string,
  style: PropTypes.object,
  isLoading: PropTypes.bool,
}

export default ContentBody
