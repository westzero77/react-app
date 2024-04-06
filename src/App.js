import './App.css';
import {Component} from "react";
import Subject from "./Components/Subject"
import TOC from "./Components/TOC"
import Content from "./Components/Content"


// 유사 Javascript 인 JSX 문법
class App extends Component {
  // constructor : 초기화 담당
  constructor(props) {
    super(props);
    this.state = {
      subject:{title:'WEB', subTitle:'world wide web!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.subTitle}
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
