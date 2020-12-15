import React, {useState} from 'react'
import {Titulo,Form, Repositorios} from './styles'
import Logo from '../../assets/logo.svg'
import api from '../../services/api-git'

function Dashboard(){
    const[pesq,setPesq] = useState('');
    const[erros,setErros] = useState('');
    const [repository,setRepository]=useState([]);

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
                        <a key={rep.full_name} href={rep.html_url}>
                            <img src={rep.owner.avatar_url} alt={rep.login} />
                            <div>
                            <strong>{rep.full_name}</strong>
                            <p>{rep.description}</p>
                            </div>
                        </a>)
                    })
                }               
            </Repositorios>
        </>
    );
}

export default Dashboard;
