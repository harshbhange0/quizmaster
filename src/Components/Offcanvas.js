import SideBarSection from "./SideBar"
import Linesvg from "./img/Linesvg"

function Offcanvas(){
    return(
        <>
        <div className="sidebar">
        <a className="btn offcanvas-btn btn-group justify-content-center align-items-center mt-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
  <span className="d-block">
    <Linesvg IconHeight="20" IconWidth="20"/>
  </span>
  
</a>

<div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title d-flex text-center"  id="staticBackdropLabel ">Quiz</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      <SideBarSection/>
    </div>
  </div>
</div>
</div>
</>
    )
} export default Offcanvas