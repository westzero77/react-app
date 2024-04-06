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
      mode:'welcome',
      subject:{title:'WEB', subTitle:'world wide web!'},
      welcome:{title:'Welcome', desc:'Hello, React!!'},
      contents:[
        {id:1, title:'HTML',desc:'HTML is for information'},
        {id:2, title:'CSS',desc:'CSS is for design'},
        {id:3, title:'JavaScript',desc:'JavaScript is for interactive'},
      ],
    }
  }
  render() {
    console.log('App render');

    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    console.log('render', this);

    return (
      <div className="App">
        {/*<Subject*/}
        {/*  title={this.state.subject.title}*/}
        {/*  sub={this.state.subject.subTitle}*/}
        {/*></Subject>*/}
        <header>
          <h1><a href="/" onClick={function(e){
            console.log('event in',this);
            e.preventDefault(); // a태그의 기본적인 동작방법을 중지 시킴
            // this.state.mode = 'welcome';
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)}>{this.state.subject.title}</a></h1>
          {this.state.subject.subTitle}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
