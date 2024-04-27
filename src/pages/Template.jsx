import UserHeader from "./UserHeader"
import Header from "../components/Header"
import { useSelector} from "react-redux"
import { selectAuth } from "../features/selector"
import '../sass/style.css'


const Template= (props)=>{
    const auth = useSelector(selectAuth)
    console.log('authTEMPLATE:', auth)
    return (
    <>
    <div className="main__template">
        <div className="main__template-header">
            <Header/>
        </div>
        <div className="main__template-container">
            {auth && <UserHeader/>}
            <main>
            {props.children}
            </main>
        </div>
    </div>
    </>
    )
}

export default Template