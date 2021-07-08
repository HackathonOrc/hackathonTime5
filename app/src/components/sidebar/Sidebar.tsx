import './sidebar.css';

function Sidebar() {
  return(
    <div className="wrapper">
      <div className="sidebar">
        <h5 className="username">@_________</h5>
        <h2 className="nome">Nome</h2>
        <div className="icons">
          <button className="home">
            <img className="homeIcon" src="./images/home_icon.png"></img>
            Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;