import { Box, Grid, Typography } from "@mui/material"
import { Container, styled } from "@mui/material";
import React from "react";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponet/AnimationComponent";
import PortifolioImage from '../assets/portifolio.png';

const Projects: React.FC = () => {
    const StyledExperience = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main
    }))

    const projects = [
        {
            title: "My Portifolio",
            subtitle: "Abr 2025",
            srcImg: {PortifolioImage}
            description: "Meu portifolio pessoal, desenvolvido para divulgações!",
            technologies: "Technologies: Typescript, React, Material UI",
            websiteURL: "https://github.com/NicolasJr19/my-portifolio",
            codeURL: "https://github.com/NicolasJr19/my-portifolio",
        },

        {
            title: "Pizzaria Proz",
            subtitle: "Mar 2025 - Abr 2025",
            srcImg: "/src/assets/images/pizzaria.png",
            description: "Projeto inicial em HTML, CSS e Javascrip, sobre pizzaria no curso técnico na Proz Educação, realizado em conjunto com meu grupo de estudos.",
            technologies: "Technologies: HTML, CSS, Javascript",
            websiteURL: "https://github.com/NicolasJr19/PizzariaProz-Final",
            codeURL: "https://github.com/NicolasJr19/PizzariaProz-Final",
        },

        {
            title: "GamerStore",
            subtitle: "Out 2024",
            srcImg: "/src/assets/images/gamerStore.png",
            description: "Projeto inicial de uma loja dinâmica de Games, realizado durante a Imersão Dev, promovido pela instituição Formação Dev",
            technologies: "Technologies: React, Next, Typescript",
            websiteURL: "https://github.com/NicolasJr19/Imersao_Dev",
            codeURL: "https://github.com/NicolasJr19/Imersao_Dev",
        },

        {
            title: "AgendaJS",
            subtitle: "Mar 2025",
            srcImg: "/src/assets/images/agenda.png",
            description: "Agenda dinâminca inicial, desenvolvida a partir das aulas ministradas por Bruno Pinho no canal CFBCursos",
            technologies: "Technologies: Javascript, HTML, CSS, MySQL",
            websiteURL: "https://github.com/NicolasJr19/AgendaJS",
            codeURL: "https://github.com/NicolasJr19/AgendaJS",
        },

        {
            title: "Instalike",
            subtitle: "Nov 2024",
            srcImg: "/src/assets/images/instalike.png",
            description: "Projeto inicial de uma página de rede social, realizado durante a Imersão da Alura",
            technologies: "Technologies: Typescript, Next, CSS, HTML, MongoDB",
            websiteURL: "https://github.com/NicolasJr19/Projeto_Alura",
            codeURL: "https://github.com/NicolasJr19/Projeto_Alura",
        },
    ]

    return(
        <>
            <StyledExperience>
                <Container maxWidth="lg">
                    <Box id="projects" pt={5} pb={3}>
                        <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                    </Box>
                    <Grid container spacing={5} pb={3}>
                        {projects.map((project: ProjectCardProps, index: number)=>(
                            <Grid size={{md:6}} key={index}>
                                <AnimationComponent moveDirection={index % 2 == 0 ? "right":"left"}>
                                    <ProjectCard
                                        title={project.title}
                                        subtitle={project.subtitle}
                                        srcImg={project.srcImg}
                                        description={project.description}
                                        technologies={project.technologies}
                                        websiteURL={project.websiteURL}
                                        codeURL={project.codeURL}
                                    />
                                </AnimationComponent>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </StyledExperience>
        </>
    )
}

export default Projects
