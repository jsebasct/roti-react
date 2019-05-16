const amIAPickle = () => true;
const getMyPickle = () => <div> Soy un pickle rick </div>

class Fruit extends React.Component {
  render() {
    amIAPickle() ? getMyPickle() : <div />
  }
}

export default Fruit