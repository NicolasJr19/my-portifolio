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
            backgroundColor: theme.palette.secondary.light,
            color: "white"
        }
    }))

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "HTML", "CSS", "Java", "Material UI", "Node-RED", "Python", "SQL"
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
                                <Typography textAlign="center">FullStack Developer Trainee</Typography>
                                <hr/>
                                <Typography textAlign="center">5+ years</Typography>
                                <Typography textAlign="center">Junior Support Analyst</Typography>
                            </StyleCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{xs: 9, md: 2.5}}>
                        <AnimationComponent moveDirection="left">
                            <StyleCard variant="outlined">
                                <SchoolIcon/>
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Technologist in Systems Analysis and Development</Typography>
                                <hr/>
                                <Typography textAlign="center">Technical Course in Systems Development</Typography>
                            </StyleCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                <Typography>
                    Tenho 23 anos e sou apaixonado por filmes, séries, HQs, games, música e futebol. Na música, toco guitarra e violão, arranho um pouco no teclado também.
                    Sou formado no ensino médio, tenho técnico em Desenvolvimento de Sistemas e atualmente estou cursando Análise e Desenvolvimento de Sistemas no ensino superior.
                </Typography><br/>
                <Typography>
                    Já trabalhei como jovem aprendiz em supermercados e também com desenho mecânico, fazendo cursos junto com essas experiências. 
                    Meu primeiro contato com desenvolvimento foi aos 13 anos, num curso rápido de criação de aplicativos e jogos pelo Cebrac — e desde então, 
                    a curiosidade só cresceu.
                </Typography><br/>
                <Typography>
                    Comecei como estagiário na Stefanini em março de 2020, fui efetivado em 2022 e fiquei até março de 2025 como analista de suporte N1. Depois, em março de 2025, comecei como estagiário de tecnologia no SENAI Centro 4.0 (Contagem/MG), 
                    trabalhando com JavaScript, React, Next, TypeScript, SQL e outras tecnologias. Também dou suporte com documentações, reuniões e levantamento de requisitos.                </Typography><br/>
                <Typography>
                    Meu foco é seguir carreira na área de desenvolvimento de software, mas quem sabe mais pra frente também não encaro uma faculdade de música? 😄
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
