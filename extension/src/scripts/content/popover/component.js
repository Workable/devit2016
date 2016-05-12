import React from 'react';

export default React.createClass({

  onClick() {
    this.props.select('eddard');
  },

  render() {
    const {spoiler} = this.props;
    return (
      <div onClick={this.onClick}>
        <span>Eddard says click me!</span>
        {spoiler ?
          <p>
            {spoiler.death}
          </p> : null}
      </div>
    );
  }
});
