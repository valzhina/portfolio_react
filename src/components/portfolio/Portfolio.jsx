import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className='portfolio' id='portfolio'>
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Full Stack</li>
                <li>Front End</li>
                <li>Back End</li>
            </ul>
            <div className="container">
                <div className="item">
                    {/* <img src="assets/fertillity_app_homePage.gif" alt="" />  */}
                    <img src="assets/fertillity_app_homeScreen.png" alt="" /> 
                    {/* <img src="https://issuu.com/valzhina/docs/vp_papar_portfolio_2015_spreads_for" alt="" />  */}
                    <h3>Fertility App</h3>
                </div>
                <div className="item">
                    <img src="assets/fertillity_app_homeScreen.png" alt="" /> 
                    <h3>Fertility App</h3>
                </div>
                <div className="item">
                    <img src="assets/fertillity_app_homeScreen.png" alt="" /> 
                    <h3>Fertility App</h3>
                </div>
                <div className="item">
                    <img src="assets/fertillity_app_homeScreen.png" alt="" /> 
                    <h3>Fertility App</h3>
                </div>
            </div>
        </div>
    )
}