

function Footer() {
    return(

        <div className="row">

            <div className="col-sm-0 col-0 col-md-1"></div>

            <div className="footer-logo col-sm-12 col-12 col-md-2 fw-bold">
                hello <p className="fw-normal text-black-50">© 2017-2018</p> 
            </div>

                <div className="footer-features col-sm-3 col-3 col-md-2 pb-5">
                    <h5>Features</h5>
                    <ul className="nav flex-column">
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Cool stuff</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Random feature</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Team feature</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Stuff for developers</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Another one</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Last time</a></u></li>
                    </ul>
                         
                </div>

                <div className="footer-resource col-sm-3 col-3 col-md-2">
                    <h5>Resources</h5>
                    <ul className="nav flex-column">
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Resource name</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Resource</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Another resource</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Final resource</a></u></li>
                    </ul>

                </div>  

                <div className="footer-resource col-sm-3 col-3 col-md-2">
                        <h5>Resources</h5>
                        <ul className="nav flex-column">
                            <li><u><a className="nav-link text-black-50 p-0" href="#">Business</a></u></li>
                            <li><u><a className="nav-link text-black-50 p-0" href="#">Education</a></u></li>
                            <li><u><a className="nav-link text-black-50 p-0" href="#">Government</a></u></li>
                            <li><u><a className="nav-link text-black-50 p-0" href="#">Gaming</a></u></li>
                        </ul>

                </div>

                <div className="footer-resources col-sm-2 col-2 col-md-2">
                    <h5>About</h5>
                    <ul className="nav flex-column">
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Team</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Locations</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Privacy</a></u></li>
                        <li><u><a className="nav-link text-black-50 p-0" href="#">Terms</a></u></li>
                    </ul>

                </div>

                <div className="col-sm-0 col-0 col-md-1"></div>

        </div>
    )
}
export default Footer;