import React from 'react';
import { Link } from 'react-router-dom';
import { isLogged } from '../../Helpers/AuthHandle';
import { Container, ContentHeaderArea, ContentLogoArea, NavContentArea} from './styles';

const Header: React.FC = () => {

  let logged = isLogged();

  return (
    <Container>
      <ContentHeaderArea>
        <ContentLogoArea>
            <Link to="/">
              <span>O</span>
              <span>L</span>
              <span>X</span>
            </Link>
        </ContentLogoArea>
        <NavContentArea>
            <ul>
              {logged && 
                <>
                  <li>
                    <Link to="/my-account">My Account</Link>
                  </li>
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                  <li>
                    <Link to="/post-an-ad">Post an ad</Link>
                  </li>
                </> 
              }
              {!logged && 
                <>
                  <li>
                    <Link to="/sing-in">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              }
            </ul>
        </NavContentArea>
      </ContentHeaderArea>
    </Container>
  );
}

export default Header;