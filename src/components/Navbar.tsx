import Sidebar from "react-bootstrap-sidebar-menu";

export default function () {
    return (
        <Sidebar expand="md">
            <Sidebar.Collapse getScrollValue={500}>
                <Sidebar.Header>
                    <Sidebar.Brand>Jaeger Staeven</Sidebar.Brand>
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
                        <Sidebar.Sub>
                            <Sidebar.Nav.Title>Email</Sidebar.Nav.Title>
                        </Sidebar.Sub>
                        <Sidebar.Sub>
                            <Sidebar.Nav.Title>LinkedIn</Sidebar.Nav.Title>
                        </Sidebar.Sub>
                    </Sidebar.Nav>
                </Sidebar.Body>
            </Sidebar.Collapse>
        </Sidebar>
    );
    
}