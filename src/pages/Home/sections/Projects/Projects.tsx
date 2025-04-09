import { Box, Grid, Typography } from "@mui/material"
import { Container, styled } from "@mui/material";
import React from "react";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponet/AnimationComponent";

const Projects: React.FC = () => {
    const StyledExperience = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main
    }))

    const projects = [
        {
            title: "My Portifolio",
            subtitle: "Abr 2025",
            srcImg: "/src/assets/images/portifolio.png",
            description: "Meu portifolio pessoal",
            technologies: "Technologies: Typescript, React, Material UI",
            websiteURL: "https://github.com/NicolasJr19/my-portifolio",
            codeURL: "https://github.com/NicolasJr19/my-portifolio",
        },

        {
            title: "Pizzaria Proz",
            subtitle: "Mar 2025 - Abr 2025",
            srcImg: "/src/assets/images/pizzaria.png",
            description: "Projeto inicial sobre pizzaria no curso técnico na Proz Educação",
            technologies: "Technologies: HTML, CSS, Javascript",
            websiteURL: "https://github.com/NicolasJr19/PizzariaProz-Final",
            codeURL: "https://github.com/NicolasJr19/PizzariaProz-Final",
        },

        {
            title: "GamerStore",
            subtitle: "Out 2024",
            srcImg: "/src/assets/images/gamerStore.png",
            description: "Projeto inicial de uma loja dinâmica de Games",
            technologies: "Technologies: React, Next, Typescript",
            websiteURL: "https://github.com/NicolasJr19/Imersao_Dev",
            codeURL: "https://github.com/NicolasJr19/Imersao_Dev",
        },

        {
            title: "AgendaJS",
            subtitle: "Mar 2025",
            srcImg: "/src/assets/images/agenda.png",
            description: "Agenda dinâminca inicial",
            technologies: "Technologies: Javascript, HTML, CSS, MySQL",
            websiteURL: "https://github.com/NicolasJr19/AgendaJS",
            codeURL: "https://github.com/NicolasJr19/AgendaJS",
        },

        {
            title: "Instalike",
            subtitle: "Mar 2025",
            srcImg: "/src/assets/images/instalike.png",
            description: "Agenda dinâminca inicial",
            technologies: "Technologies: Typescript, Next, CSS, HTML",
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
                                        technologies={project.websiteURL}
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