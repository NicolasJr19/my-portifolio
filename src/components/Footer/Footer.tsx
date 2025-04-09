import LinkedInIcon from "@mui/icons-material/LinkedIn"
import  GitHubIcon from "@mui/icons-material/GitHub"
import  InstagramIcon from "@mui/icons-material/Instagram"
import {Box, Container, IconButton, Typography} from "@mui/material"

const Footer: React.FC = () => {
    return(
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={()=>window.open("https://github.com/NicolasJr19")}>
                            <GitHubIcon/>
                        </IconButton>
                        <IconButton onClick={()=>window.open("https://www.linkedin.com/in/jorge-n%C3%ADcolas-ferreira-de-paula-82733013a/")}>
                            <LinkedInIcon/>
                        </IconButton>
                        <IconButton href="https://www.instagram.com/nicolasjr19/">
                            <InstagramIcon/>
                        </IconButton>
                    </Box>
                    <Typography textAlign="center">
                        © 2025 Jorge Nicolas - All rights reserved
                    </Typography>
                </Container>
            </Box>
        </>
    )
}

export default Footer