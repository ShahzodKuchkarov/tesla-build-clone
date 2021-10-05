import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const Main = Styled.div`
          display: flex;
                align-items: center;
                justify-content: center;
                padding-bottom: 20px;

ul{
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
}
  li {
      margin-left:10px;
      a {
          color:#5c5d61;
          font-size:13px;
          font-weight:700;
      }
  }
`;

function Footer() {
    return (
        <Main>
            <ul style={{ justifyContent: 'center' }}>
                <li>
                    <Link>
                        Tesla © 2021
                    </Link>

                </li>
                <li>
                    <Link>
                        Privacy & Legal
                    </Link>
                </li>
                <li>
                    <Link>
                        Contact
                    </Link>
                </li>
                <li>
                    <Link>
                        Careers
                    </Link>

                </li>
                <li>
                    <Link>
                        News
                    </Link>

                </li>
                <li>
                    <Link>
                        Engage
                    </Link>
                </li>
                <li>
                    <Link>
                        Locations
                    </Link>
                </li>
            </ul>
        </Main>
    )
}

export default Footer
