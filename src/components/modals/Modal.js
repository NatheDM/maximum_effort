import React from "react";

const display = {
  display: "block"
};

const hide = {
  display: "none"
};

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      toggle: false
    };
  }

  toggle(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render() {
    const { name, ...props } = this.props;
    var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
        {React.cloneElement(this.props.children, { toggle: this.toggle })}
      </div>
    );
    return (
      <div>
        <div onClick={this.toggle}>{this.props.name}</div>
        {modal}
      </div>
    );
  }
}

export default Modal;
