import { Box, Card, Container, Grid, styled, Typography } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AnimationComponent from "../../../../components/AnimationComponet/AnimationComponent"
import SchoolIcon from '@mui/icons-material/School';


const About: React.FC = ()=>{
    const StyleCard = styled(Card)(({theme})=>({
        padding:"10px 10px",
        textAlign:"center",
        marginBottom:"10px",
        '&:hover':{
            backgroundColor: theme.palette.secondary.light
        }
    }))

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "HTML", "CSS", "Java", "Material UI"
    ]

    return(
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center">About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid size={{xs: 9, md: 2.5}}>
                        <AnimationComponent moveDirection="right">
                            <StyleCard variant="outlined">
                                <WorkspacePremiumIcon/>
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">2+ months</Typography>
                                <Typography textAlign="center">FullStack Development</Typography>
                            </StyleCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{xs: 9, md: 2.5}}>
                        <AnimationComponent moveDirection="left">
                            <StyleCard variant="outlined">
                                <SchoolIcon/>
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Technologist in Systems Analysis and Development</Typography>
                                <Typography textAlign="center">Systems Development Technician</Typography>
                            </StyleCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras porta semper velit vel rutrum.
                        Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris.
                        Phasellus a ultrices elit.
                        Curabitur ut diam eu orci auctor pretium.
                        Nullam ultricies erat quam, eget porta velit vehicula sit amet.
                        Nullam sodales iaculis metus, sed vestibulum nisl vulputate at.
                        Integer in pulvinar libero.
                        Donec ornare est quis tortor varius efficitur.
                        Maecenas sed erat quis felis facilisis pellentesque.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id felis convallis, luctus lorem eget, varius dolor.
                    </Typography>
                </Box>
                <hr/>
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) =>(
                            <Grid key={index} size={{xs: 5, md: 2, sm: 4, lg: 2}}>
                                <StyleCard variant="outlined">
                                    {skill}
                                </StyleCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default About