import React ,{Component} from 'react';
import './additem.css';


class Additem extends Component{
    state={
        name:'',
        age:''
    }

    handleChange=(e)=> {
       console.log(e.target.id)
        this.setState({
            [e.target.id]: e.target.value
        });

    }

    handleSubmit=(e)=> {
        e.preventDefault();
        let name=e.target.name.value
        let age=e.target.age.value
        if(isNaN(age)){
            alert("Age is not a number!")
            return false
        }
        if(name !== '' && age != ''){
            if(this.state)
                console.log(this.state)
            this.props.additem(this.state)
            this.setState({
                name:'',
                age:''
            });
        }else{
            alert('You must write something!')
        }

       // alert('A name was submitted: ' + this.state.value);
    }
    render(){
        return (
            <div>
                <form  onSubmit={this.handleSubmit}>
                    <div className="form-row col-6 offset-3">
                        <div className="form-group col-md-6">
                            <input type="text" placeholder="name" className="form-control"   onChange={this.handleChange} value={this.state.name}  id="name"/>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="text" placeholder="age"  className="form-control"  onChange={this.handleChange} value={this.state.age} id="age" />

                        </div>
                        <div className="form-group col-md-2">
                            <input type="submit" className="form-control" value="Add"/>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}
export default Additem;
