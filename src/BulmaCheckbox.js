import React from 'react';

class BulmaCheckbox extends React.Component {
  render() {
    return (
      <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" checked={this.props.value} onChange={this.props.handleChange} />
            &nbsp;{this.props.name}
          </label>
        </div>
      </div>
    );
  }
}

export default BulmaCheckbox;
