import React from 'react';

class SimpleClassComponentWithConstructor extends React.Component {

  constructor (props) {
     super(props);

     this.state = {
        name: this.props.name
     };
  }

   render() {
      return (
        <div>{this.state.name}</div>
      );
   }
}

export default SimpleClassComponentWithConstructor;
