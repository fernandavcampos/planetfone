import React from "react";
import axios from "axios";


export default class ListaClientes extends React.Component{
    
    state={
        clientes:[]
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            const dadosClientes = res.data
            this.setState({clientes:dadosClientes})
        })
    }
    
    render(){
        return(
            <div>
                {this.state.clientes.map(
                    cliente=> <div key={cliente.id}><strong>Id:</strong> {cliente.id}<br/> <strong>Name:</strong> {cliente.name}<br/> <strong>Username:</strong> {cliente.username}<br/> <strong>Email:</strong>  {cliente.email}
                    <hr/></div>
                )}
                
            </div>
        )
    }
}
