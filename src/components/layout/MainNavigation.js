import { Link } from 'react-router-dom';

let Logo = require('/Users/maymemoonzin/Workspace/JobReadyOnlineSpringWS1/hmtool-react-client/src/components/images/healthcare_logo.png');
function MainNavigation(){
    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-blue">
        <div className="container-fluid">
            <a href="#" className="navbar-brand">
                <img src={Logo} height="80" alt="CoolBrand"></img>
            </a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <Link to='/dashboard' className="nav-item nav-link active">Dashboard</Link>
                    <a href="#" className="nav-item nav-link active">Service</a>
                    <a href="#" className="nav-item nav-link active">Register</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Login</a>
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">Admin</a>
                            <a href="#" className="dropdown-item">Patient</a>
                            
                        </div>
                    </div>
                    <a href="#" className="nav-item nav-link active">Contact Us</a>
                    
                </div>
                
            </div>
        </div>
    </nav>
    );
}

export default MainNavigation;