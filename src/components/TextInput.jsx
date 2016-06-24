import React from 'react';
import shortId from 'shortId';

const initialState = {
  isError: false
}

const uId = shortid.generate();

class DynamicInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.validateInput = this.validateInput.bind(this);
    this.getInput = this.getInput.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  componentWillMount() {
    this.setState(initialState);
  }

  componentWillReceiveProps() {
    this.setState(initialState);
  }

  isValid() {
    return !this.state.isError;
  }

  getInput() {
    const { type } = this.props;
    switch(type) {
      case 'select':
        return <SelectInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'checkbox':
        return <CheckboxInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'radio':
        return <RadioInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'text':
        return <TextInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'password':
        return <PasswordInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'email':
        return <EmailInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'number':
        return <NumberInput {...this.props} ref={uId} name={`${uId}_input`} />;
      case 'textbox':
        return <TextboxInput {...this.props} ref={uId} name={`${uId}_input`} />;
      default:
        return <TextInput {...this.props} ref={uId} name={`${uId}_input`} />;
    }
  }

  render() {
    const { label, name, type, labelClass } = this.props;
    return (
      <div className="form-group">
        <label className={labelClass || 'label'} htmlFor={`${uId}_input`}>{ label || name || type }</label>
        { this.getInput() }
      </div>
    );
  }

}

export default DynamicInput;
