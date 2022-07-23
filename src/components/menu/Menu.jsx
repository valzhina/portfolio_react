import "./menu.scss"

export default function Menu() {
    return(
        <div className="menu">
            <ul>
                <li>
                    <a href="#intro">Home</a>
                </li>
                <li>
                    <a href="#intro">Portfolio</a>
                </li>
                <li>
                    <a href="#intro">Stack</a>
                </li>
                <li>
                    <a href="#intro">Testimonials</a>
                </li>
                <li>
                    <a href="#intro">Contact</a>
                </li>
            </ul>
        </div>
    )
}