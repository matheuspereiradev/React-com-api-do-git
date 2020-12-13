import React, {useState} from 'react'
import {Titulo,Form, Repositorios} from './styles'
import Logo from '../../assets/logo.svg'
import api from '../../services/api-git'

function Dashboard(){
    const[pesq,setPesq] = useState('');
    const [repository,setRepository]=useState([]);

    async function lidarAddPesq(event){
        event.preventDefault();
        const response = await api.get(`/repos/${pesq}`);
        console.log(response)
    }

    return(
        <>
            <img src={Logo} alt='logo'/>
            <Titulo>Explore repositorios no github</Titulo>
            <Form onSubmit={lidarAddPesq}>
                <input type='text' value={pesq} onChange={event=>setPesq(event.target.value)} placeholder='digite o repositorio'/>
                <button type='submit'>Pesquisar</button>
            </Form>
            <Repositorios>
            <a href="#">
                    <img src='https://avatars0.githubusercontent.com/u/23202029?s=400&u=a911a4359169a7a1d96b86b2ab5549fad96c49eb&v=4' alt='{repository.name}' />
                    <div>
                    <strong>Repositorio</strong>
                    <p>sajknsjank</p>
                    </div>
                </a>
               
            </Repositorios>
        </>
    );
}

export default Dashboard;
