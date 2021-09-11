import Styled from 'styled-components';

export const Main = Styled.div`

.navbar {
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0 20px;
    background: transparent ;
    position:fixed;
    left:0;
    right:0;
    z-index:1;
};

.navbar__logo img {
    height:110px;
};

.navbar ul {
    padding:0;
    list-style:none;
    display:flex;
    justify-content:space-between:
    align-items:center;
};

.navbar ul li {
    &:hover{
        background-color:#00000011;
    }
    margin-left:25px;
    border-radius:10px;
    padding:5px 10px;
}

.navbar ul li a {
    text-decoration:none;
    color:#181b21;
    font-weight:500;
    font-size:17px;
}
`;