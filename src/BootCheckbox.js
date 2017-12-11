import React from 'react';
import { Checkbox } from 'react-bootstrap/lib';

class BootCheckbox extends React.Component {
  render() {
    return (
      <Checkbox checked={this.props.value} onChange={this.props.handleChange}>
        {this.props.name}
      </Checkbox>
    );
  }
}

export default BootCheckbox;
