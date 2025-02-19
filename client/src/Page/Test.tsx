import {Footer} from "../component/Footer.tsx";
import {Navbar} from "../component/Navbar.tsx";

function test() {

    return (
        <>
            <div className="flex-col flex h-full ">
                <Navbar></Navbar>
                <div className="flex-1 bg-yellow-300"></div>
            <Footer></Footer>
            </div>
        </>
    )
}

export default test
