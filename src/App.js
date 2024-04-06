import './App.css';
import {Component} from "react";

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>WEB</h1>
        world wide web!
      </header>
    );
  }
}

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language.
      </article>
    );
  }
}

// 유사 Javascript 인 JSX 문법
class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <Nav></Nav>
        <Article></Article>
      </div>
    );
  }
}

export default App;
