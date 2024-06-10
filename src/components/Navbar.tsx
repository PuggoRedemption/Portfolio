import Sidebar from "react-bootstrap-sidebar-menu";

// Set up SideBar Navigation Content as Links
export default function () {
    return (
        <Sidebar expand="md" hide="md">
            <Sidebar.Collapse>
                <Sidebar.Header id="Name">
                    <Sidebar.Brand>Jaeger Staeven</Sidebar.Brand>
                </Sidebar.Header>
                <Sidebar.Header>
                    <Sidebar.Brand id="Thumbnail"><img src="Thumbnail.jpg" alt="Thumbnail-img" /></Sidebar.Brand>
                </Sidebar.Header>
                <Sidebar.Body>
                    <Sidebar.Nav>
                        <Sidebar.Nav.Link eventKey={"menu_about"}>
                            <Sidebar.Nav.Title>About</Sidebar.Nav.Title>
                        </Sidebar.Nav.Link>
                        <Sidebar.Nav.Link eventKey={"menu_projects"}>
                            <Sidebar.Nav.Title>Projects</Sidebar.Nav.Title>
                        </Sidebar.Nav.Link>
                        <Sidebar.Nav.Link className="sub-link">
                            <Sidebar.Nav.Title>ShardRun</Sidebar.Nav.Title>
                        </Sidebar.Nav.Link>
                        <Sidebar.Nav.Link eventKey={"menu_contact"}>
                            <Sidebar.Nav.Title>Contact</Sidebar.Nav.Title>
                        </Sidebar.Nav.Link>
                        <Sidebar.Nav.Link className="sub-link">
                            <Sidebar.Nav.Title>Email</Sidebar.Nav.Title>
                        </Sidebar.Nav.Link>
                        <Sidebar.Nav.Link className="sub-link">
                            <Sidebar.Nav.Title>LinkedIn</Sidebar.Nav.Title>
                        </Sidebar.Nav.Link>
                    </Sidebar.Nav>
                </Sidebar.Body>
            </Sidebar.Collapse>
        </Sidebar>
    );
}