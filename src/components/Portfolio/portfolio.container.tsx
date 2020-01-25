import React, { useContext } from 'react'
import { PortfolioState, PortfolioContext } from '../../state/PortfolioState';
import PortfolioItem from './portfolio.component';

const PortfolioContainer = () => {

    const context = useContext<PortfolioState>(PortfolioContext);
    
    return (
        <div>
            {context.projects.map((project, i) => {
                return <PortfolioItem key={i} project={project} />
            })}
        </div>
    )
}

export default PortfolioContainer
