import React from "react";


function MyNavbar() {
	const [isActive, setisActive] = React.useState(false);

    return (

		<nav className={"navbar is-size-4 m-5 p-3 is-fixed-top is-transparent"} role={"navigation"} aria-label={"navbar main navigation"} >
			<div className={"navbar-brand"}>
				<a className={"navbar-item"}>
					<p>{"Sandrine Lê"}</p>
				</a>

				<a
            onClick={() => {
              setisActive(!isActive);
            }}
            role="button"
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label={"menu"}
            aria-expanded={"false"}
            data-target={"navbarBasicExample"}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
			</div>

			<div id={"navbarBasicExample"} className={`navbar-menu ${isActive ? "is-active" : ""}`}>
				<div className={"navbar-end"}>
					<a href={"#hero"} className={"navbar-item"}>
						{"Home"}
					</a>
					<a href={"#about"} className={"navbar-item"}>
						{"About"}
					</a>
					<a href={"#projects"} className={"navbar-item"}>
						{"Projects"}
					</a>
					<a href={"#contact"} className={"navbar-item"}>
						{"Contact"}
					</a>
				
				</div>


			</div>
		</nav>

    );
}

export default MyNavbar;