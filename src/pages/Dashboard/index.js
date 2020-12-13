import React from 'react'
import {Titulo,Form, Repositorios} from './styles'
import Logo from '../../assets/logo.svg'

function Dashboard(){
    return(
        <>
            <img src={Logo} alt='logo'/>
            <Titulo>Explore repositorios no github</Titulo>
            <Form>
                <input type='text' placeholder='digite o repositorio'/>
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
