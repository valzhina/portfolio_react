import "./topbar.scss"
import { PersonPin, LinkedIn } from '@mui/icons-material';

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active") }> {/*if const menuOpen == True that we got from App.isx --> active appear in the output */}
            
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="left_corner">software engineer</a>
                    <div className="itemContainer"> {/*.itemContainer */}
                        <PersonPin className="icon"/>
                        <span>valzhinapiskun@gmail.com</span>
                    </div> 
                    <div className="itemContainer"> {/*.itemContainer */}
                        <LinkedIn className="icon"/>
                        <span>olya-mateshov</span>
                    </div> 
                    {/* <h1>Hello</h1>  */}
                </div>
                <div className="right">
                    <div className="threeLines" onClick={()=>setMenuOpen(!menuOpen)}> {/*creates on click event and run function...*/}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div> 
            </div>
        </div>
    )
}