import React from 'react';
import { ChildrenType } from '../../types/ChildrenType';

import { Container } from './styles';

const Layout: React.FC<ChildrenType> = ({children}) => <Container>{children}</Container>

export default Layout;