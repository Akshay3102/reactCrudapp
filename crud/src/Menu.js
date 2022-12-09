import {Link} from 'react-router-dom'
import './Menu.css'

const Menu=()=>{
    return(
<nav class="navbar navbar-expand-lg bg-success">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <Link  class="nav-link active" to="/">List Student</Link>
        </li>
        <li class="nav-item">
          <Link  class="nav-link active" to="/add-student">Add Student</Link>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
    )
}

export default Menu