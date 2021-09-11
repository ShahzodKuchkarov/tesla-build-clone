import Styled from 'styled-components';
import Smodel from '../Assets/tesla_s.jpg';
import Ymodel from '../Assets/tesla_y.jpg';
import Model3 from '../Assets/model_3.png';
import Xmodel from '../Assets/tesla_x.jpg';
import SolarPanel from '../Assets/solar_panels.jpg';
import SolarRoof from '../Assets/solar_roof.jpg';
import Accessories from '../Assets/accessories.png';

export const Main = Styled.div`

.model_s {
    background: url(${Smodel});
    background-size:cover;
    background-repeat: no-repeat;
}

.model_y {
    background: url(${Ymodel});
    background-size:cover;
    background-repeat: no-repeat;
}
.model_3 {
    background: url(${Model3});
    background-size:cover;
    background-repeat: no-repeat;
}
.model_x {
    background: url(${Xmodel});
    background-size:cover;
    background-repeat: no-repeat;
}
.solar_panels {
    background: url(${SolarPanel});
    background-size:cover;
    background-repeat: no-repeat;
}
.solar_roof {
    background: url(${SolarRoof});
    background-size:cover;
    background-repeat: no-repeat;
}
.accessories {
    /* background: url(${Accessories}); */
    background-size:cover;
    background-repeat: no-repeat;
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
  
    h2 {
    margin-top:100px;
    font-size:40px;
    font-weight:600;
    }
    .bot {
        margin-top:450px;
        margin-bottom:50px;
    }
    .bot__link {
        text-decoration:none;
        text-transform:uppercase;
        font-size:15px;
        border-radius:40px;
        padding:10px 60px;
        background-color: #000;
        color:#fff;
        margin-bottom:20px;
    }
}
.slick-dots li {
    background-color:#000;
}
`;