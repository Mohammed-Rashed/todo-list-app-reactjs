import React ,{Component} from 'react';
import './todoitems.css';


const Todoitems = (props) => {
    console.log(props)
    const {item , deleteitem} =props;
    let count=item.length
    const listitems =
        count?
        item.map(item=>{
            return(

                <tr key={item.id} >
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td><button  onClick={()=>deleteitem(item.id)} className="btn btn-danger p-1">Delete</button></td>
                </tr>
            )
        })
        :(
        <tr><td colSpan="4" className="text-center"><span className="badge-danger badge">No rows found</span></td></tr>
    )
    return (
        <div>
            <table className="table table-hover table-bordered ">
                <thead >
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                {listitems}
                </tbody>
            </table>


        </div>
    );
}

export default Todoitems;
