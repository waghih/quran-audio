import { slide as Menu } from 'react-burger-menu'

class Example extends React.Component {
  showSettings (event) {
    event.preventDefault();
    .
    .
    .
  }

  render () {
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="#">About</a>
        <a id="list" className="menu-item" href="#">Surah List</a>
        <a id="name" className="menu-item" href="#">Surah Name</a>
      </Menu>
    );
  }
}
