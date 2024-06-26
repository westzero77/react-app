import './App.css';
import {Component} from "react";
import Subject from "./Components/Subject"
import TOC from "./Components/TOC"
import Content from "./Components/Content"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode:'welcome',
      selected_content_id:2,
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
      let i = 0;
      while (i < this.state.contents.length) {
        const data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i++;
      }
    }

    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.subTitle}
          onChangePage={
          function(){
            this.setState({
              mode: 'welcome'
            })
          }.bind(this)
        }
        ></Subject>
        <TOC data={this.state.contents}
             onChangePage={function (id) {
               this.setState({
                 mode: 'read',
                 selected_content_id:Number(id),
               })
             }.bind(this)
        }></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
