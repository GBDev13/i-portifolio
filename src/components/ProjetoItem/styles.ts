import styled from 'styled-components';

interface ContainerProps {
    imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
    > a {
        position: relative;
        width: 100%;
        height: 10rem;
        padding: 1.5rem;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        border-radius: .5rem;
        border: 1px solid ${({ theme }) => theme.border};
        background: url(${props => props.imgUrl}) no-repeat center;
        background-size: cover;
        transition: 0.5s;
        cursor: pointer;
        overflow: hidden;
        border: 2px solid red;

        &:hover {
            border-color: ${({ theme }) => theme.primary};

            > div.overlay {
                opacity: .3;
        }

        > section {
            z-index: 2;
            h1 {
                color: ${({ theme }) => theme.primary};
                font-size: 1.5rem;
            }

            h2 {
                color: ${({ theme }) => theme.secondary};
                font-weight: 300;
                font-size: 1rem;
            }
        }

        > div.overlay {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.gradient};
            opacity: .7;
            transition: .5s;
        }
    }
} 
`;
