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
                                <Typography textAlign="center" fontWeight={600}>Experiências</Typography>
                                <Typography textAlign="center">+2 Meses</Typography>
                                <Typography textAlign="center">Estagiário FullStack como Analista de Tecnologia</Typography>
                                <hr/>
                                <Typography textAlign="center">+5 Anos</Typography>
                                <Typography textAlign="center">Analista de Suporte N1</Typography>
                            </StyleCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid size={{xs: 9, md: 2.5}}>
                        <AnimationComponent moveDirection="left">
                            <StyleCard variant="outlined">
                                <SchoolIcon/>
                                <Typography textAlign="center" fontWeight={600}>Formação</Typography>
                                <Typography textAlign="center">Tecnólogo em Análise e Desenvolvimento de Sistemas</Typography>
                                <hr/>
                                <Typography textAlign="center">Curso Técnico em Desenvolvimento de Sistemas</Typography>
                            </StyleCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                <Typography>
                    Sou apaixonado por tecnologia, desenvolvimento de software e inovação. Tenho 23 anos, sou cristão e, nas horas vagas, me envolvo com música — toco guitarra, violão e me aventuro no teclado.

Minha jornada com TI começou cedo: aos 13 anos fiz meu primeiro curso de criação de aplicativos e jogos, o que despertou uma curiosidade que só cresceu desde então. Sou formado em Análise e Desenvolvimento de Sistemas, com técnico em Desenvolvimento de Sistemas, o que reforçou minha base sólida em lógica, programação e arquitetura de software.
                </Typography><br/>
                <Typography>
                    Já atuei como jovem aprendiz e também com desenho mecânico, sempre conciliando estudos e capacitação. Em março de 2020, entrei na Stefanini como estagiário, fui efetivado em 2022 e permaneci até março de 2025 como analista de suporte N1, aprimorando minha capacidade de resolver problemas, lidar com usuários e entender processos empresariais. Em seguida, iniciei um estágio em tecnologia no SENAI Centro 4.0 (Contagem/MG), onde trabalhei com JavaScript, React, Next, TypeScript, SQL e participei ativamente de documentações técnicas, reuniões e levantamento de requisitos — estágio que concluí ao finalizar meu curso superior.
                </Typography><br/>
                <Typography>
                    Comecei como estagiário na Stefanini em março de 2020, fui efetivado em 2022 e fiquei até março de 2025 como analista de suporte N1. Depois, em março de 2025, comecei como estagiário de tecnologia no SENAI Centro 4.0 (Contagem/MG), 
                    trabalhando com JavaScript, React, Next, TypeScript, SQL e outras tecnologias. Também dou suporte com documentações, reuniões e levantamento de requisitos.                </Typography><br/>
                <Typography>
                    Hoje, meu foco é evoluir na área de desenvolvimento de software, explorando tecnologias modernas e participando de projetos desafiadores. No futuro, quem sabe não volto às salas de aula, mas dessa vez para estudar música e unir minhas duas paixões.
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
