import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
    isActive: boolean;
}

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;

    ul {
        display: flex;
        gap: 2rem;
        align-items: center;
    }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
    a {
        color: ${(props) => 
        props.isActive 
        ? props.theme.textLight
        : props.theme.textHighlight };

        transition: 0.3s;

        &:hover {
            color: ${props => 
            props.isActive 
            ? lighten(0.2, props.theme.textHighlight) 
            : lighten(0.2, props.theme.textLight)};
        }
    }
`;
