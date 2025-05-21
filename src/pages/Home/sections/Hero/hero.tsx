import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import  GitHubIcon from "@mui/icons-material/GitHub"
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/pdfs/Curriculo.pdf"
import Typewriter from "../../../../components/Typewriter/Typewriter"
import React from "react";

const Hero: React.FC = () => {
    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('xs')]:{ //<= mobile
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px"
        },
        [theme.breakpoints.up('md')]:{ //>=mobile
            display: "flex",
            alignItems:"center",
            height: "100vh",
            paddingTop: "100px"
        }
    }))
    const StyledImg = styled("img")(()=>({
        width: "75%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%",
        position: "relative"
    }))

    const handleDownload = () => {
        console.log("download")

        //criar um link
        const link = document.createElement('a')
        link.href = CV
        link.download = 'Curriculo.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleEmail = () => {
        const emailAdress = 'nicolasjn22@gmail.com'
        const subject = 'Assunto'
        const body = "Olá! Acabei de ver seu portfólio..."

        const mailtoLink = `mailto:${emailAdress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink)
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{xs: 12, md: 5}}>
                            <Box position="relative" pb={3}>
                                <Box position="absolute" width="150%" top={-150} right={-90}>
                                    <AnimatedBackground></AnimatedBackground>
                                </Box>
                                <Box textAlign="center">
                                    <StyledImg src={Avatar}/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{xs:12, md:7}}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Jorge Nicolas</Typography>
                            <Typewriter text="I'm a software developer" delay={120} variant="h2" color="primary.contrastText"/>                            
                            <Box mt={3}>
                                <Grid container  display="flex" justifyContent="center" spacing={3}>
                                    <Grid size={{xs: 10, md: 4}}>
                                        <StyledButton onClick={()=>window.open("https://github.com/NicolasJr19")}>
                                            <GitHubIcon/>
                                            <Typography>GitHub</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid size={{xs: 10, md: 4}}>
                                        <StyledButton onClick={()=> handleDownload()}>
                                            <DownloadIcon/>
                                            <Typography>Download CV</Typography>
                                        </StyledButton>
                                    </Grid>
                                    <Grid size={{xs: 10, md: 4}}>
                                            <StyledButton onClick={()=> handleEmail()}>
                                                <EmailIcon/>
                                                <Typography>Contact Me</Typography>
                                            </StyledButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
