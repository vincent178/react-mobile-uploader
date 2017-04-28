import React, {PropTypes} from 'react';

export default class PlaceHolder extends React.Component {

  static propTypes = {
    height: PropTypes.number,
    bgColor: PropTypes.string
  };


  render() {

    const {height, bgColor} = this.props;

    let heightCss = '20px';

    if (height) {
      heightCss = `${height}px`;
    }

    let bgColorCss = '#f5f5f5' ;

    if (bgColor) {
      bgColorCss = bgColor;
    }

    return <div style={{height: heightCss, width: '100%', background: bgColorCss}} />;
  }
}