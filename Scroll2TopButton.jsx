import  Radium from 'radium';
import React from 'react';
import BrowserUtils from 'browser-utils';
import PropTypes from 'prop-types';

class Scroll2TopButton extends React.Component {
  static propTypes =
  {
    delay: PropTypes.number, // in ms
    scrollStep: PropTypes.number, // in px
    color: PropTypes.string
  };

  static defaultProps =
  {
    delay: 16.66, // in ms
    scrollStep: 100 // in px
  };

  constructor(props)
  {
    super(props);

    this.state = {
      intervalId: 0,
      scrollY: window.scrollY
    };

    if (BrowserUtils.isBrowser())
    {
      BrowserUtils.getWindow().addEventListener('scroll', this._onScroll);
    }
  }

  // Clean-up of state
  componentWillUnmount()
  {
    window.removeEventListener('scroll', this._onScroll);
  }

  _onScroll = () =>
  {
    this.setState({
      scrollY: window.scrollY
    });
  };

  scrollStep()
  {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStep);
  }

  scrollToTop()
  {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delay);
    this.setState({
      intervalId: intervalId
    });
  }

  render()
  {
    let color = this.props.color || 'blue';
    if (this.state.scrollY > 60)
      return (
        <div onClick={ () => { this.scrollToTop(); }} style={[style.main, {position: 'fixed'}]}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="76" height="76" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round">
            <path fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M6,20 L17.5,10 L29,20" opacity={0.8}/>
          </svg>
        </div>
      );

    return <span/>;
  }

}

const style =
{
  main:
  {
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    bottom: 10,
    right: 10
  }
};
export default Radium(Scroll2TopButton);
