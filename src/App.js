import React ,{Component} from 'react';
import './App.css';
import Todoitems from './components/todoitem/todoitems'
import Additem from './components/additem/additem'


class App extends Component{
  state={
    items:[


    ]
  }
  deleteitem = (id) =>{
        console.log(id)
    /*  let items=this.state.items
      let i=items.findIndex(item=> item.id==id)
      items.splice(i,1)
      this.setState({items:items})*/
      /*new way*/
      let items=this.state.items.filter(item=>{
        return item.id != id
      })
      this.setState({items:items})

  }
    additem = (item) =>{
        let items=this.state.items
        item.id=Math.floor(Math.random() * 101);
        items.push(item)
        this.setState({items:items})
    }
    render(){
        return (
            <div className="App">
                <h1>ToDo list App with ReactJs</h1>
                <div className="container">
                    <Additem additem={this.additem} />
                    <Todoitems item={this.state.items} deleteitem={this.deleteitem}/>
                </div>

            </div>
        );
    }
}
export default App;
