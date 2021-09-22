import React, { Component } from "react";

class ToggleBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false,
    };
    this.toggleBox = this.toggleBox.bind(this);
  }

  toggleBox() {
    const { opened } = this.state;
    this.setState({
      opened: !opened,
    });
  }

  render() {
    var { title, children } = this.props;
    const { opened } = this.state;

    if (opened) {
      title = "HideData";
    } else {
      title = "ShowData";
    }

    return (
      <div className="box">
        <button className="boxTitle" onClick={this.toggleBox}>
          {title}
        </button>
        {opened && <div className="boxContent">{children}</div>}
      </div>
    );
  }
}

export default ToggleBox;
