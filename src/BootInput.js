import React from 'react';
import { Form, Col, FieldGroup, FormGroup, InputGroup, FormControl, ControlLabel } from 'react-bootstrap/lib';

class BootInput extends React.Component {

  render() {

    const formControl = <FormControl
      type="number"
      min={0}
      value={this.props.value}
      placeholder="Enter text"
      onChange={this.props.handleChange}
    />;

    let result;
    if (this.props.addon) {
      result = (
        <InputGroup>
          {formControl}
          <InputGroup.Addon>{this.props.addon}</InputGroup.Addon>
        </InputGroup>
      );
    } else {
      result = formControl;
    }

    return (
      <Form horizontal>
      <FormGroup>
        <Col componentClass={ControlLabel} sm={7}>
          {this.props.name}
        </Col>
        <Col sm={5}>
          {result}
        </Col>
      </FormGroup>

      </Form>
    );
  }
}

export default BootInput;
