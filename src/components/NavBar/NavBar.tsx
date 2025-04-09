import { AppBar, IconButton, Menu, MenuItem, styled, Toolbar} from "@mui/material"
import Box from "@mui/material/Box" 
import React from "react"
import MenuIcon from "@mui/icons-material/Menu"

export const StyledNavLink = styled("a")(()=>({
    textDecoration:"none",
    color: "inherit"
}))

export const StyledMobileToolbar = styled(Toolbar)(({theme})=>({
    [theme.breakpoints.up('xs')]:{
        display: "flex",
        justifyContent: "end"
    },
    [theme.breakpoints.up('md')]:{
        display: "none"
    }
}))

export const StyledDesktopToolbar = styled(Toolbar)(({theme})=>({
    [theme.breakpoints.up('xs')]: {
        display: "none"
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-evenly"
    }
}))


export default function Navbar(){
        const [anchorE1, setAchorE1] = React.useState<null | HTMLElement>(null)
        const handleMenu = (event: React.MouseEvent<HTMLElement>)=>{
            setAchorE1(event.currentTarget)
        }

        const handleClose = () => {
            setAchorE1(null)
        }

        const handleSmoothScroll = (id: string) => {
            const element = document.getElementById(id)
            if(element){
                element.scrollIntoView({behavior: "smooth"})
                handleClose()
            }
        }
   

    return (
      <>
        <Box sx={{flexGrow:1}}>

        </Box>
        <AppBar position="absolute">
            <StyledMobileToolbar>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <MenuIcon/>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorE1}
                    anchorOrigin={{
                        vertical:'top',
                        horizontal: 'right'
                    }}
                    keepMounted
                    open={Boolean(anchorE1)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={()=> handleSmoothScroll("about")}>
                        <StyledNavLink>About</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={()=> handleSmoothScroll("skills")}>
                        <StyledNavLink>Skills</StyledNavLink>
                    </MenuItem>
                    <MenuItem onClick={()=> handleSmoothScroll("projects")}>
                        <StyledNavLink>Projects</StyledNavLink>
                    </MenuItem>
                </Menu>
            </StyledMobileToolbar>

            <StyledDesktopToolbar variant="regular"> 
                <MenuItem onClick={()=> handleSmoothScroll("about")}>
                    <StyledNavLink>About</StyledNavLink>
                </MenuItem>
                <MenuItem onClick={()=> handleSmoothScroll("skills")}>
                    <StyledNavLink>Skills</StyledNavLink>
                </MenuItem>
                <MenuItem onClick={()=> handleSmoothScroll("project")}>
                    <StyledNavLink>Project</StyledNavLink>
                </MenuItem>
            </StyledDesktopToolbar>
        </AppBar>
      </>
    )
}