import React, {useEffect, useState} from 'react'
import {Titulo,Form, Repositorios} from './styles'
import Logo from '../../assets/logo.svg'
import api from '../../services/api-git'
import { Link } from 'react-router-dom';

function Dashboard(){
    const[pesq,setPesq] = useState('');
    const[erros,setErros] = useState('');
    const [repository,setRepository]=useState(()=>{
        const itens = localStorage.getItem('@GithubRep:repositorios')

        if(itens){
            return JSON.parse(itens)
        }else{
            return [];
        }
    });

    useEffect(()=>{
        localStorage.setItem('@GithubRep:repositorios', JSON.stringify(repository))
    },[repository])

    async function lidarAddPesq(event){
        event.preventDefault();
        if(!pesq){
            setErros('Digite o autor/nome do repositorio');
            return;
        }
        try{
        const response = await api.get(`/repos/${pesq}`);
        const repos = response.data;
        setRepository([...repository,repos])
        }catch(e){
            setErros('Erro ao contactar com o servidor')
        }
    }

    return(
        <>
            <img src={Logo} alt='logo'/>
            <Titulo>Explore repositorios no github</Titulo>
            <Form onSubmit={lidarAddPesq}>
                <input type='text' value={pesq} onChange={event=>setPesq(event.target.value)} placeholder='digite o repositorio'/>
                <button type='submit'>Pesquisar</button>
            </Form>
            {erros && <p>{erros}</p>}
            <Repositorios>
                {
                    repository.map(rep=>{
                        return(
                        <Link key={rep.full_name} to={`/repositorio/${rep.full_name}`}>
                            <img src={rep.owner.avatar_url} alt={rep.login} />
                            <div>
                            <strong>{rep.full_name}</strong>
                            <p>{rep.description}</p>
                            </div>
                        </Link>)
                    })
                }               
            </Repositorios>
        </>
    );
}

export default Dashboard;
