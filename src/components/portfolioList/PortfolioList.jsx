import "./portfolioList.scss"

export default function PortfolioList({id,title, active, setSelected}) {
    return (
        <li 
            className={active ? "portfolioList active" : "portfolioList"} //if selected : if it is  not
            onClick = {() => setSelected(id)}
        > 
            {title}
        </li>
    );
} 