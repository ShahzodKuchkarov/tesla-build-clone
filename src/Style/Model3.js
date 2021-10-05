import Styled from 'styled-components';
import Tesla3 from '../Assets/model_3_header.jpg';

export const Main = Styled.div`

.order-now-white{
            color:#fff;
        text-transform:uppercase;
        font-size:13px;
        padding:10px 40px;
        border-radius:30px;
        border:3px solid #ffff;
        font-weight:500;
       &:hover{
         background-color:#fff;
         color:#000;
       }
}

.order-now-black{
        color:#000;
        text-transform:uppercase;
        font-size:13px;
        padding:10px 30px;
        border-radius:30px;
        border:3px solid #000;
        font-weight:500;
       &:hover{
         background-color:#000;
         color:#fff;
       }
}

.list-design {
        list-style:none;
      padding:0;
      display:flex;
      align-items:center;
      li {
          margin-left:50px;
      }
     h3, h4 {
          color:#fff;
          margin:0;
      }
        h3 {
          font-size:30px;

      }
}

.d-flex {
    display:flex;
}
.height {
  height:100vh;
}

.model3{
background:url(${Tesla3});
background-size:cover;
background-repeat: no-repeat;
flex-direction:column;
align-items:center;
  .model3__top {
    margin-top:100px;
    flex-direction:column;
    align-items:center;
    margin-bottom:450px;
      h2 {
    margin:0;
    font-size:40px;
    font-weight:600;
    color:#fff;
  }
}
}
.safety__left{
  flex:1;
  padding:40px;
  h2 {
    font-weight:300;
  }
  h1{
    font-weight:600;
    margin-bottom:20px !important;
  }
  p{
    font-weight:500;
  }
  h2,h1 {
    margin:0;
  }
}
.safety__left__rating{
  width:100%;
  background:#e2e4e4;
  padding:20px;
  border-radius:30px;
  margin-bottom:50px;
  h1{
    text-align:center;
    font-size:23px;
    margin:0;
  }
  ul{
    list-style:none;
    padding:0;
    li {
      font-weight:600;
      display:flex;
      justify-content:space-between;
      margin-bottom:10px;
    }
  }
}
.safety__right{
  flex:2.5;
  background:#f2f2f2;
  img {
    height:100%;
  }
}
.performance {
  flex-direction:column;
}
.performance__image{
  flex:3;
  justify-content:center;
  ul {
    align-items:flex-end;
    text-align:center;
    p {
      color:#fff;
      font-size:14px;
    }
  }
}
.dual-motor {
  flex-direction:column;
}
.range__description{
    flex:1;
  padding:40px;
  h2 {
    font-weight:300;
  }
  h1{
    font-weight:600;
    margin-bottom:20px !important;
  }
  p{
    font-weight:500;
  }
  h2,h1 {
    margin:0;
  }
  .range__description__img{
    margin-bottom:70px;
    img{
      width:350px;
      height:300px;
    }
  }
}
.autopilot{
  flex-direction:column;
  ul {
    position:absolute;
    z-index:1;
    list-style:none;
    margin:60px 0 0 100px;
    padding:0;
    li {
      margin-bottom:50px;
      width:50%;  
    }
    h1 {
      font-size:30px;
      margin:0;
    }
  }
}
.autopilot__video{
  background:#faf9fa;
  width:100%;
  flex:3;
  video {
    height:500px;
    width:100%;
  }
}
.interior{
  flex-direction:column;
}
.specs__image {
  width:50%;
  img {
    height:100%;
    width:100%;
    object-fit:cover;
  }
}
.specs__info {
  width:50%;
  background:#000;
  .specs__info__heading{
    color:#fff;
    span{
      font-weight:300;
    }
  }
  .specs__info__button{
    background:transparent;
    color:#d0d1d2;
    font-size:13px;
    border:3px solid #393c41;
    padding: 3px 60px;
    border-radius:30px;
    margin-right:5px;
    cursor:pointer;
  }
  .specs__info__button-compare{
    background:#fff;
    color:#000;
    font-size:13px;
    border:3px solid #fff;
    padding: 3px 80px;
    border-radius:30px;
    cursor:pointer;
  }
}
`;