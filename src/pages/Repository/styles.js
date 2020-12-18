import styled from 'styled-components'

export const Cabecalho = styled.div`
    h1{
        font-size:30px;
        margin:0px;
    }
    h2{
        margin:0px;
        font-size:20px;
        color:gray;
    }
    img{
        width: 64px;
      height: 64px;
      border-radius: 50%;
    }
`

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