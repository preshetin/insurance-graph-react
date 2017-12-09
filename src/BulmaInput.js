import React from 'react';

class BulmaInput extends React.Component {

  render() {

    const addonClass = this.props.addon ? 'field has-addons' : 'field';

    const addonButton = this.props.addon ? (
        <p className="control">
          <a className="button is-static">
            {this.props.addon}
          </a>
        </p>
    ) : '';

    return (
      <div className="field">
        <label className="label">{this.props.name}</label>

          <div className={addonClass}>
          <div className="control">
            <input className="input" value={this.props.value} type="number" onChange={this.props.handleChange}/>
          </div>
            {addonButton}
          </div>
      </div>
    );
  }
}

export default BulmaInput;
