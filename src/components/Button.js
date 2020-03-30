import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

// class Button extends Component {
//   //contextType is a special name
//   //below line is equilavent to Button.contextType = LanguageContext
//   static contextType = LanguageContext;
//   render() {
//     const text = this.context === "english" ? "Submit" : "Voorleggen";
//     return <button className="ui button primary">{text}</button>;
//   }
// }

// export default Button;

class Button extends Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen";
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
