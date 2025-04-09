import { Box, Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import CV from "../../../../assets/pdfs/Curriculo.pdf"

const Hero = () => {
    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems:"center",
        [theme.breakpoints.up('xs')]:{ //<= mobile
            paddingTop: "100px"
        },
        [theme.breakpoints.up('md')]:{ //>=mobile
            paddingTop: "0px"

        }
    }))
    const StyledImg = styled("img")(()=>({
        width: "75%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "50%"
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
        const subject = 'Subject'
        const body = "Hello! I saw your portifolio..."

        const mailtoLink = `mailto:${emailAdress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        window.open(mailtoLink)
    }

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid size={{xs: 12, md: 5}}>
                            <Box position="relative">
                                <Box position="absolute" width="140%" top={-150} right={0}>
                                    <AnimatedBackground></AnimatedBackground>
                                </Box>
                                <Box position={"relative"} textAlign="center" alignItems="center">
                                    <StyledImg src={Avatar}/>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid size={{xs:12, md:7}}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Jorge Nicolas</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center">I'm a software developer</Typography>
                            
                            <Grid container  display="flex" justifyContent="center" spacing={3} pt={5}>
                                <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                    <StyledButton onClick={()=> handleDownload()}>
                                        <DownloadIcon/>
                                        <Typography>Download CV</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid size={{xs: 12, md: 4}} display="flex" justifyContent="center">
                                        <StyledButton onClick={()=> handleEmail()}>
                                            <EmailIcon/>
                                            <Typography>Contact Me</Typography>
                                        </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero