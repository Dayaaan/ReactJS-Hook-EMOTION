import React from 'react';
import ReactDOM from 'react-dom';
import styled from '@emotion/styled'

import theme from './styles/theme';

import App from './components/App';

const hoverStyle = ({
    background: '#ccc',
});

const StyledH1 = styled.h1({
    color: theme.mainColor,
    fontSize: '2em',
    textDecoration: 'underline',
    '&:hover': hoverStyle,
});

const StyledApp = styled.div({
    width: '500px',
    margin: '0 auto',
});

const StyledParag = styled.p({
    ...hoverStyle,
    color: theme.textColor,
});



const Test = () => (
    <StyledApp>
        <StyledH1>Je suis en réact</StyledH1>
        <StyledParag>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi vel dignissimos dicta minus voluptate, recusandae earum ex aspernatur. Dolore culpa a, adipisci dolores impedit accusamus delectus in debitis quo quaerat.Omnis nisi, laborum optio beatae molestiae exercitationem eaque error totam culpa saepe expedita, officiis delectus aliquid maxime numquam necessitatibus sit magnam, praesentium enim cumque facere quia voluptatem. Non, quibusdam mollitia!</StyledParag>
    </StyledApp>
);

ReactDOM.render(<App />, document.getElementById('root'));