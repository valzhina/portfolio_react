import "./topbar.scss"
import { PersonPin, LinkedIn } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="left_corner">software enineer</a>
                    <div className="itemContainer"> {/*.itemContainer */}
                        <PersonPin className="icon"/>
                        <span>valzhinapisku@gmail.com</span>
                    </div> 
                    <div className="itemContainer"> {/*.itemContainer */}
                        <LinkedIn className="icon"/>
                        <span>olya-mateshov</span>
                    </div> 
                    {/* <h1>Hello</h1>  */}
                </div>
                <div className="right">
                    this is a test
                </div> 
            </div>
        </div>
    )
}