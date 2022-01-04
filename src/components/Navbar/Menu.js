

function Menu(){
    return(
        <>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-Content" aria-controls="navbar-Content" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbar-Content">

                    <ul className="navbar-nav">
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Tour</a> </li>
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Products</a> </li>
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Features</a> </li>
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Enterprise</a> </li>
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Support</a> </li>
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Pricing</a> </li>
                        <li className="nav-item px-4"> <a className="nav-link" href="#">Cart</a> </li>
                    </ul>
                    
                </div>
        </>
    )
}
export default Menu;