import { FaCartArrowDown } from "react-icons/fa"
import { Link } from "react-router-dom"

function Navbar() {
  return (
   <nav className="navbar navbar-light ng-light shadow-sm">
    <div className="container-lg">
      <Link className="navbar-brand text-danger fw-bold fs-4" to='/' >BookStore</Link>
      <div>
        <Link to='/cart' className="btn btn-danger text-white  ms-auto px-4 rounded-pill fw-bold">
        <FaCartArrowDown className="me-2 fs-4"/> 0
        </Link>
      </div>
    </div>
   </nav>
  )
}

export default Navbar