import {createGlobalStyle} from 'styled-components'
import GitHubImage from '../assets/github.svg'

export default createGlobalStyle`
    *{
        padding:0;
        font-family:'roboto'
    }

    body{
        background:#B0C4DE url(${GitHubImage}) no-repeat 70% top;
    }

    #root{
        max-width:900px;
        margin: 0 auto;
        padding:40px 20px;
    }
`