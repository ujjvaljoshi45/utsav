function Navbar() {
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="">Utsav</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#ourwork">Our Work</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#aboutus">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#contactus">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="https://drive.google.com/drive/folders/1nSpeV8YCFXzau3HInLkCljFYqUWXjqXG?usp=share_link">Brochure</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar