import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      globalTitle: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    console.log('RenderedForm');
  }

  componentDidUpdate() {
    document.title = this.state.globalTitle;
    console.log('updated')
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({
      globalTitle: `My form: ${this.state.title}`,
    });
    document.title = this.state.globalTitle;
    console.log('Title changed');
    this.setState({
      title: '',
    });
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('onChange')
  }

  componentWillUnmount() {
    console.log('unmounted')
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h3>{this.state.globalTitle}</h3>
        <form onSubmit={this.onSubmit}>
            <input
              type='text'
              name='title'
              onChange={this.onChange}
              value={this.state.title}
              required
            />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
