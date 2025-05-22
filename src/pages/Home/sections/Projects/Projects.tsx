import { Box, Grid, Typography } from "@mui/material"
import { Container, styled } from "@mui/material";
import React from "react";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponet/AnimationComponent";
import Portifolio from "../../../../assets/images/portifolio.png"
import Agenda from "../../../../assets/images/agenda.png"
import GamerStore from "../../../../assets/images/gamerStore.png"
import Instalike from "../../../../assets/images/instalike.png"
import Pizzaria from "../../../../assets/images/pizzaria.png"
import ControleEstoque from "../../../../assets/images/controleestoque.png"


const Projects: React.FC = () => {
    const StyledExperience = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main
    }))

    const projects = [
        {
            title: "My Portifolio",
            subtitle: "Abr 2025",
            srcImg: `${Portifolio}`,
            description: "Meu portifolio pessoal, desenvolvido para divulgações!",
            technologies: "Technologies: Typescript, React, Material UI",
            websiteURL: "https://github.com/NicolasJr19/my-portifolio",
            codeURL: "https://github.com/NicolasJr19/my-portifolio",
        },

        {
            title: "Controle de Estoque",
            subtitle: "Abr 2025",
            srcImg: `${ControleEstoque}`,
            description: "Projeto de uma página para controle de estoque, com abas de movimentação de usuários, fornecedores, produtos e também tela de login, com verificação de token. Seguido planejamento do curso de Javascript do canal CFB Cursos",
            technologies: "Technologies: Javascript, CSS, HTML, Node-red, SQL",
            websiteURL: "https://github.com/NicolasJr19/ControleDeEstoque",
            codeURL: "https://github.com/NicolasJr19/ControleDeEstoque",
        },

        {
            title: "Pizzaria Proz",
            subtitle: "Mar 2025 - Abr 2025",
            srcImg: `${Pizzaria}`,
            description: "Projeto inicial em HTML, CSS e Javascrip, sobre pizzaria no curso técnico na Proz Educação, realizado em conjunto com meu grupo de estudos.",
            technologies: "Technologies: HTML, CSS, Javascript",
            websiteURL: "https://github.com/NicolasJr19/PizzariaProz-Final",
            codeURL: "https://github.com/NicolasJr19/PizzariaProz-Final",
        },

        {
            title: "GamerStore",
            subtitle: "Out 2024",
            srcImg: `${GamerStore}`,
            description: "Projeto inicial de uma loja dinâmica de Games, realizado durante a Imersão Dev, promovido pela instituição Formação Dev",
            technologies: "Technologies: React, Next, Typescript",
            websiteURL: "https://github.com/NicolasJr19/Imersao_Dev",
            codeURL: "https://github.com/NicolasJr19/Imersao_Dev",
        },

        {
            title: "AgendaJS",
            subtitle: "Mar 2025",
            srcImg: `${Agenda}`,
            description: "Agenda dinâminca inicial, desenvolvida a partir das aulas ministradas por Bruno Pinho no canal CFBCursos",
            technologies: "Technologies: Javascript, HTML, CSS, MySQL",
            websiteURL: "https://github.com/NicolasJr19/AgendaJS",
            codeURL: "https://github.com/NicolasJr19/AgendaJS",
        },

        {
            title: "Instalike",
            subtitle: "Nov 2024",
            srcImg: `${Instalike}`,
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
