import React from 'react';
import shortId from 'shortId';

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.onReset = this.onReset.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onReset() {

  }

  onSubmit() {

  }

  render() {
    const { formClass, fields } = this.props;
    return (
      <form className={formClass}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox"> Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    );
  }

}

export default DynamicForm;
