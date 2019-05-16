
//esto no funciona porq no esta installado
// hay que hacer npm 
import React from 'react';
import ReactDOM from 'react-dom';

const amIAPickle = () => true;
const getMyPickle = () => <div> Soy un pickle rick </div>

class Fruit extends React.Component {
  render() {
    return amIAPickle() ? getMyPickle() : <div />
  }
}


ReactDOM.render( <Fruit/> , document.getElementById('myApp'));

//export default Fruit