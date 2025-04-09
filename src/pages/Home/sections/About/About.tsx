import { Box, Card, colors, Container, Grid, styled, Typography } from "@mui/material"
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
                                <Typography textAlign="center">FullStack Developer Trainee</Typography>
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
                    Tenho atualmente 23 anos. Gosto de filmes, séries, HQ's, games, música e futebol. Na área da música toco guitarra, violão, teclado.
                    Possuo ensino médio completo, técnico em Desenvolvimento de Sistemas e atualmente estou cursando superior/tecnólogo Análise e Desenvolvimento de Sistemas.
                </Typography><br/>
                <Typography>
                    Já trabalhei como aprendiz na área de supermercados e desenho mecânico, fazendo juntamente cursos de aprendizagem como Operador de Supermercado e Desenho Mecânico.
                    Meu primeiro contato com desenvolvimento foi aos 13 anos, quando fiz um curso rápido de Desenvolvimento de Aplicativo/Jogo, pelo Cebrac.
                </Typography><br/>
                <Typography>
                    Iniciei como estagiário na Stefanini em março de 2020, onde até ser efetivado em 2022 e atuei como analista de suporte N1 até março de 2025. Em março de 2025 iniciei como estagiário como analista de tecnologia no SENAI Centro 4.0 em Contagem-MG, atuando com desenvolvimento em Javascript, React, Next, Typescript, SQL e outras linguagens, além de auxiliar com documentações, reuniões de propostas e levantamentos de requisitos.
                </Typography><br/>
                <Typography>
                    Pretendo seguir carreira voltado para desenvolvimento de software e posteriormente me cursar em música.
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