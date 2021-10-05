import Styled from 'styled-components';
import Teslas from '../Assets//tesla_s.jpg';
import Interior from '../Assets//tesla_s_interior.jpg';
import Slider_1 from '../Assets/slider_1.jpg';
import Slider_2 from '../Assets/slider_2.jpg';
import Slider_3 from '../Assets/slider_3.jpg';
import Slider_4 from '../Assets/slider_4.jpg';
import BlueTelsa from '../Assets/tesla_blue.jpg';
import RedTesla from '../Assets/tesla_s.jpg';
import LongRange from '../Assets/long-range-model.jpg';
import TeslaSafety from '../Assets/tesla_safety.png';
import BlackTesla from '../Assets/tesla_specs.jpg';

export const Main = Styled.div`
height:100vh;
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
.modelS{
height:100vh;
background:url(${Teslas});
background-size:cover;
background-repeat: no-repeat;  
display:flex;
flex-direction:column;
align-items:center;
  .modelS__top {
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
}
  .modelS__bot ul {
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
    .models__bot-link a {
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
  }
}
  .interior{
      min-height:100vh;
      background: url(${Interior});
      background-size:cover;
      background-repeat: no-repeat;

      .interior__heading{
        text-align:center;
           background-image: linear-gradient(180deg, #000000, #111111c2, rgb(0 0 0 / 0%) )
      }

      h2{
        padding:15px 0 40px 0;
        font-size:30px;
        color:#fff;
      }

  }
  .slick-list h1, h2, h3, h4, h5, h6 {
    margin:0;
  }
  .ant-carousel .slick-slide{
    height:90vh;
  }
  .ant-carousel .slick-dots{
    position:inherit;
  }
.ant-carousel .slick-dots li button {
  width:10px;
  height:10px;
  border-radius:50%;
}
  .interface {
    min-height:100vh;
    background-color:#000;
    img {
      object-fit:cover;
    }
    h3 {
      color:#ffff;
      font-size:25px;
    }
    p{
      color:#fff;
      font-size:18px;
    }
    .interface__slider {
      margin:auto;
      margin-top:50px;
      width:80% !important;
      height:570px;
      background-repeat:no-repeat;
      background-size:cover;
      display:block !important;
      border-radius:3%;
      display:flex !important;
      align-items:flex-end;
      justify-content:center;
    }
    .interface__slider-info {
      background:#00000068;
      width:70%;
    }
    .slider-1{
      background: url(${Slider_1});
           background-repeat:no-repeat;
      background-size:cover;
    }
     .slider-2{
      background: url(${Slider_2});
           background-repeat:no-repeat;
      background-size:cover;
    }
    .slider-3{
      background: url(${Slider_3});
     background-repeat:no-repeat;
      background-size:cover;
    }
    .slider-4{
      background: url(${Slider_4});
      background-repeat:no-repeat;
      background-size:cover;
    } 
  }
  .services{
    padding-top:30px;
    padding-bottom:30px;
    background:#000;
    color:#727477;
    img {
  width:500px;
  height:280px;
  
}
  }

 .info {
   width:400px;
   display:flex;
   flex-direction:column;
   justify-content:center;
   h2{
   color:#fff;
   }
 }

  .flex{
  display:flex;
 justify-content:space-around;
  }
  .tesla-blue{
   padding-bottom:20px; 
   background:url(${BlueTelsa});
   background-repeat:no-repeat;
   background-size:cover;
   height:600px;
   display:flex;
   justify-content:space-evenly;
   align-items:flex-end;
   text-align:center;
  h2,p{
    color:#fff;
  }
  h2{
    font-size:30px;
  }
  }
  .powertrain{
    background:#f5f5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .powertrain__img img {
    height:500px;
    width:1200px;
  }
  .powertrain__img {
    margin-left:50px;
  }
  .powertrain__description{
    width:840px;
    margin:0;
    margin:auto;
    margin-top:30px;
    margin-bottom:20px;
  }
  .powertrain__type{
    margin-top:20px;
    display:flex;
  }
  .powertrain-card {
    width:400px;
    padding:10px;
    margin-left:20px;
    border:3px solid transparent;
    border-top:3px solid #727477;
    color:#727477;
    h2,h3{
    color:#727477;
    }
    &:hover {
      color:#000;
      border-top: 3px solid #000;
      cursor:pointer;
      h2,h3{
        color:#000;
      }
    }
  }
  .powertrain-card-active{
    border:3px solid #000;
    color:#000;
    h2,h3{
      color:#000;
    }
  }
  .powertrain-card__list{
    display:flex;
    justify-content:space-between;
  }
  .tesla-red {
   background:url(${RedTesla});
   padding-bottom:20px;
   background-repeat:no-repeat;
   background-size:cover;
   height:600px;
   display:flex;
   justify-content:space-evenly;
   align-items:flex-end;
   text-align:center;
     h2,p{
    color:#fff;
  }
  h2{
    font-size:30px;
  }
  }
  .long-range-model{
    height:100vh;
    display:flex;
  }
  .long-range-model__left {
    background:url(${LongRange});
    background-size:cover;
    background-repeat:no-repeat;
    display:flex;
    align-items:flex-end;
    justify-content:center;
    flex:3;
  }
 .long-range-model__left__list {
      max-width:250px;
      text-align:center;
      margin-bottom:30px;
       color:#000;
      h2{
        color:#000;
        font-weight:500;
      }
    }
  .long-range-model__right{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:40px 20px;
    h3,p{
       color:#727477;
    }
  }

  .travel{
    margin-top:100px;
    padding-bottom:80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .travel__desription {
      width:800px;
      h1,p{
        font-weight:500;
      }
    }
    .travel__destinations{
      margin-top:20px;
      margin-bottom:50px;
      display:flex;
      .travel__destinations__card{
      width:170px;
      padding:10px;
      margin-left:20px;
      border:3px solid transparent;
      border-top:3px solid #727477;
      color:#727477;
      font-weight:500;
      p{
        font-size:18px;
      }
      .large{
        font-size:30px;
      }
      &:hover {
      color:#000;
      border-top: 3px solid #000;
      cursor:pointer;
      h2,h3{
        color:#000;
      }
    }
      }
        .card-active{
         border:3px solid #000;
         color:#000;
   }
    }
  }
  .safety{
    height:100vh;
    display:flex;
  }
  .safety__left {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:40px 50px;
    h3,p{
       color:#727477;
    }
    flex:1;
  }
  .safety__right{
    background:url(${TeslaSafety});
    background-size:cover;
    background-repeat:no-repeat;
    flex:3;
  }
  .autopilot{
    margin-top:30px;
    display:flex;
    justify-content:space-around;
    .autopilot__info{
      padding:10px 0;
      height:400px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }

   video {
     height:400px;
   }
  }

  .features{
    margin-top:100px;
    padding-bottom:80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .features__desription {
      width:800px;
      h1,p{
        font-weight:500;
      }
    }
    .features__type{
      margin-top:20px;
      margin-bottom:50px;
      display:flex;
      .features__type__card{
      width:170px;
      padding:10px;
      margin-left:20px;
      border:3px solid transparent;
      border-top:3px solid #727477;
      color:#727477;
      font-weight:500;
      h3{
        margin-bottom:10px;
      }
      &:hover {
      color:#000;
      border-top: 3px solid #000;
      cursor:pointer;
      h3{
        color:#000;
      }
    }
      }
        .card-active{
         border:3px solid #000;
         color:#000;
   }
    }
  }
.specs{
      display:flex;
      height:100vh;
      background:url(${BlackTesla});
      background-size:cover;
      background-repeat:no-repeat;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      h1,h2,h3,h4,h5 {
        color:#fff;
      }
      .specs__heading{
         span {
           font-weight:300;
         }
         .specs__heading__types{
           h3{
             border:3px solid #393c41;
             padding:1px 100px;
             border-radius:40px;
             cursor:pointer;
           }
           .active {
             border:3px solid #fff;
           }
           display:flex;
         }
       }
       .specs__description{
         display:flex;
         .specs__description__list{
           list-style:none;
           padding:0;
           margin-left:30px;
           .specs__description__list-item{
             margin-top:10px;
             h4 {
               color:#b3b3b3;
             }
           }
         }
        }
}
.sub-footer {
  height:100vh;
  display:flex;
  
  .sub-footer__left {
    width:50%;
    display:flex;
    align-items:center;
    justify-content:center;
    a {
      margin:40px 20px 0 0;
    }
  }
  .sub-footer__right {
    display:flex;
    align-items:center;
    justify-content:center;
   img {
     height:390px;
     width:700px;
   }
  width:50%;
  }
}

`;
