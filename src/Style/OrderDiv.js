import Styled from 'styled-components';

export const Main = Styled.div`
display:flex;
justify-content:center;
padding:40px 0 70px 0;
.order__left{
    width:250px;
}
    .order-now {
        color:#000;
        text-transform:uppercase;
        font-size:13px;
        padding:10px 40px;
        border-radius:30px;
        border:3px solid #000000;
        font-weight:500;
       &:hover{
         background-color:#000000;
         color:#ffffff;
       }
    }
.order__right{
    max-width:700px;
    p {
        font-size:17px;
        font-weight:500;
        color:#000;
    }
}
`;
