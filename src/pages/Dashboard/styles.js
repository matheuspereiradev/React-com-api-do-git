import styled from 'styled-components'

export const Titulo = styled.h1`
                        font-size:48px;
                        color:#3a3a3a;
                        `;

export const Form = styled.form`

    display:flex;

    input{
        border-radius: 5px 0 0 5px;
        width:60%;
        border-style:none;
        height:50px;
        padding: 5px 5px 5px 5px;
    }

    button{
        background:#04d361;
        color:white;
        border-style:none;
        width:30%;
    }
`;

export const Repositorios = styled.div`
  margin-top: 50px;
  max-width: 700px;
  > a div,
  a img {
    transition: 0.2s;
    &:hover {
      transform: translateX(10px);
    }
  }
  > a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    & + a {
      margin-top: 16px;
    }
    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }
    > div {
      flex: 1;
      margin: 0 16px;
      > strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      > p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }
    > svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;