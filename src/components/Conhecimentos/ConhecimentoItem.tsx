import { ReactNode } from 'react';
import { ConhecimentoContainer } from './styles';

interface ConhecimentoProps {
    title: string;
    icon: ReactNode;
}

function ConhecimentoItem({ title, icon }: ConhecimentoProps) {
    return (
        <ConhecimentoContainer>
            <p>{title}</p>
            {icon}
        </ConhecimentoContainer>
    )
}

export default ConhecimentoItem;