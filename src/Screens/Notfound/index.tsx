import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

const Notfound: React.FC = () => {
    return (
        <Container>
            <Content>
                <Link to="/">Go Back</Link>
            </Content>
        </Container>
    )
}

export default Notfound;