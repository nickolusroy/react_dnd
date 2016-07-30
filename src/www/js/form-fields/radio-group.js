import React from 'react';

export class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selection : 'Dwarf'
    };

    this.onChange = this.onChange.bind(this);
  };

  onChange(e) {
    console.log("alignment: "+e.target.value);
    this.setState({
      selection : e.target.value
    });
    e.target.customData = {};
    e.target.customData.key = this.props.groupName;
    console.log(e.target.customData);
    this.props.onUpdate(e);
  }
  render() {

    return  <div className={this.props.groupName}>
              <h3>{this.props.groupLabel}</h3>
              {this.props.choices.map(choice => <label key={choice.value}>{choice.name}
                     <input type="radio" className={this.props.groupName} name={this.props.groupName}
                       value={choice.value}
                       checked={this.state.selection === choice.value}
                       onClick={this.onChange}  />
                  </label>
              )}
            </div>
  }
}