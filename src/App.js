import './App.css';
import {Component} from "react";
import Subject from "./Components/Subject"
import TOC from "./Components/TOC"
import Content from "./Components/Content"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'read',
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
    let _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.subTitle}
          onChangePage={
          function(){
            this.setState({
              mode: 'welcome',
            })
          }.bind(this)
        }
        ></Subject>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
