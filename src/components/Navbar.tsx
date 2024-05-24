import SidebarMenu, { SidebarMenuBody, SidebarMenuHeader, SidebarMenuNav, SidebarMenuNavLink, SidebarMenuNavTitle } from 'react-bootstrap-sidebar-menu';

export default function () {
    return (
        <SidebarMenu className='sidebar'>
            <SidebarMenuHeader>
                <h1>Jaeger Staeven</h1>
            </SidebarMenuHeader>
            <SidebarMenuBody>
                <SidebarMenuNav>
                    <SidebarMenuNavLink>
                        <SidebarMenuNavTitle>About</SidebarMenuNavTitle>
                    </SidebarMenuNavLink>
                    <SidebarMenuNavLink>
                        <SidebarMenuNavTitle>Projects</SidebarMenuNavTitle>
                    </SidebarMenuNavLink>
                    <SidebarMenuNavLink>
                        <SidebarMenuNavTitle>Contact</SidebarMenuNavTitle>
                    </SidebarMenuNavLink>
                </SidebarMenuNav>
            </SidebarMenuBody>
        </SidebarMenu>
    );
    
}