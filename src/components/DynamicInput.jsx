import React from 'react';
import shortId from 'shortId';

const uId = shortid.generate();

class DynamicInput extends React.Component {
  constructor(props) {
    super(props);
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
    return !this.refs[uId].isError;
  }

  validateInput() {
    this.refs[uId].validateInput;
  }

  getInput() {
    const { type } = this.props;
    switch(type) {
      case 'select':
        return <SelectInput {...this.props} ref={uId} uId={uId} />;
      case 'checkbox':
        return <CheckboxInput {...this.props} ref={uId} uId={uId} />;
      case 'radio':
        return <RadioInput {...this.props} ref={uId} uId={uId} />;
      case 'text':
        return <TextInput {...this.props} ref={uId} uId={uId} />;
      case 'password':
        return <PasswordInput {...this.props} ref={uId} uId={uId} />;
      case 'email':
        return <EmailInput {...this.props} ref={uId} uId={uId} />;
      case 'number':
        return <NumberInput {...this.props} ref={uId} uId={uId} />;
      case 'textbox':
        return <TextboxInput {...this.props} ref={uId} uId={uId} />;
      default:
        return <TextInput {...this.props} ref={uId} uId={uId} />;
    }
  }

  render() {
    console.log(this.props.name, uId);
    return this.getInput();
  }

}

export default DynamicInput;
