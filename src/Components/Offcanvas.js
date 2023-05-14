import SideBarSection from "./SideBar"
import Linesvg from "./img/Linesvg"

function Offcanvas(){
    return(
        <>
        <div className="sidebar">
        <a className="btn offcanvas-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
    <Linesvg IconHeight="20" IconWidth="20"/>
  
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