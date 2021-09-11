import Styled from 'styled-components';

export const Main = Styled.div`

height:100vh;
display:flex;
flex-direction:column;
align-items:center;


.top {
    margin-top:100px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:450px;
    h2 {
    margin:0;
    font-size:40px;
    font-weight:600;
    }
    p {
    font-size:17px;
    }
    a {
        color:#000;
    }
}
.bot {
    a {
        text-decoration:none;
        text-transform:uppercase;
        font-size:15px;
        border-radius:40px;
    }
    .bot__1 {
      padding:10px 60px;
      background-color: #000000b7;
      color:#fff;
      margin-right:50px;
    }
    .bot__2 {
        padding:10px 40px;
        background-color:#ffffffc0;
        color:#000;
  }
}
`;