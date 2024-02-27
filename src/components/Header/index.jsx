import React, { Component } from 'react';
import { HeaderText } from '@Elements';

export default class Header extends Component {
  render() {
    return (
      <HeaderText>
        <span>15 Puzzle</span>
        <p>- the classic version -</p>
      </HeaderText>
    );
  }
}
