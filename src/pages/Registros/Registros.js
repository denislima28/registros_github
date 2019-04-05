import React, {Component} from 'react';

class Registros extends Component 
{
    constructor(){
        super();
        this.state = {
            lista :  []
                ,nome: ""
        }

        
    }

    buscarRegistros(){
        fetch('https://api.github.com/users/denislima28/repos')
        //fetch('https://api.github.com/users/arielmn22/repos')
        .then(resposta => resposta.json())
        .then(data => this.setState({ lista : data }))
        .catch(erro => console.log(erro))
    }

    //define a inicialização do react
    componentDidMount(){
        this.buscarRegistros();
    }

    render(){
        return(
            <div>
                sadsadsad

                <table id="tabela-lista">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Lista de Repositórios</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            //for (let i=0; i < 2; i++){
                            this.state.lista.map(function(registro){
                                //let registro = [];
                                
                                    return(
                                            <tr>
                                                <td>{registro.name}</td>
                                                <td>{registro.description}</td>
                                                <td>{registro.created_at}</td>
                                                <td>{registro.size}</td>
                                            </tr>                                              
                                );

                            })
                        }
                    </tbody>
                </table>
            </div>

            
                
        );

       
    }

    
}

export default Registros;