import React, { useEffect, useState } from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import { useRouteMatch, Link } from 'react-router-dom';
import api from '../../services/api-git'
import {Cabecalho,Repositorios} from './styles'

function Repository(){
    const {params} = useRouteMatch();

    const [repo,setRepo]=useState(null);
    const [issues,setIssues]=useState([]);

    useEffect(()=>{
        api.get(`/repos/${params.repositorio}`).then(res=>{
            setRepo(res.data);
        })

        api.get(`/repos/${params.repositorio}/issues`).then(res=>{
            setIssues(res.data);
        })
    },[params.repositorio])
    

    return(
        <>
            <Link to="/"><FaAngleLeft/>Voltar</Link> 
            <br></br>
            <br></br>
            {repo && (
                <Cabecalho>
                    <img src={repo.owner.avatar_url} alt='logo'/>
                    <h1>{params.repositorio}</h1>
                    <h2>{repo.description}</h2>
                    <strong>{repo.watchers} </strong><small>watchers </small>
                    <strong>{repo.forks} </strong><small>forks </small>
                    <strong>{repo.open_issues} </strong><small>issues </small>
                </Cabecalho>
                )
            }
            {issues &&(
                <Repositorios>
                      {issues.map(issue=>{
                          return(
                            <a id={issue.id} href={issue.url}>
                                <img src={issue.user.avatar_url} alt={issue.user.login} />
                                <div>
                                <strong>{issue.title}</strong>
                                <p>{issue.state}</p>
                                </div>
                            </a>)
                      })}       
                </Repositorios>
                )
            }
            
        </>
    )
}

export default Repository;
