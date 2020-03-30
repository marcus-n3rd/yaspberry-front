import React, { Component } from 'react';

const INITIAL_MESSAGE = 'Welcome to Melon Cuts!';

/*
 * Class – MelonCuts
 */

export default class MelonCuts extends Component {

  /*
   * Constructor
   */

  constructor(props) {
    super(props);

    this.state = {};
    this.state.message = INITIAL_MESSAGE;
  }

  /*
   * Component Did Mount
   */

  componentDidMount() {
    const self = this;
    // Get Global State from local storage
    let data = localStorage.getItem('MelonCuts');
    data = data ? JSON.parse(data) : {};
    self.state.message = data.message || INITIAL_MESSAGE;
  }

  /*
   * Render
   */

  render() {

    return (
      <div className='MelonCuts'>
        <section>
          <h1>{this.state.message}</h1>
        </section>
      </div>
    )
  }
}
