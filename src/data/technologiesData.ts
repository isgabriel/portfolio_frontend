import {
    DiPython,
    DiHtml5,
    DiCss3,
    DiJavascript1,
    DiJava,
    DiReact,
    DiBootstrap,
    DiSass,
    DiGit,
    DiGithubBadge,
} from "react-icons/di";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { FaVuejs, FaFigma, FaNodeJs } from "react-icons/fa";

// interface iTech {
//     img: object;
//     name: string;
//     description: string;
// }

const technologiesData = {
    html: {
        img: { DiHtml5 },
        name: "HTML",
        description:
            "HTML é uma linguagem de marcação utilizada na construção de páginas na Web",
    },
    css: {
        img: { DiCss3 },
        name: "CSS",
        description:
            "CSS é um mecanismo para adicionar estilos a uma página web.",
    },
    javascript: {
        img: { DiJavascript1 },
        name: "JAVASCRIPT",
        description:
            "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    },
    react: {
        img: { DiReact },
        name: "REACT",
        description:
            "React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web",
    },
    typescript: {
        img: { SiTypescript },
        name: "TYPESCRIPT",
        description:
            "TypeScript é um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
    },
    bootstrap: {
        img: { DiBootstrap },
        name: "BOOTSTRAP",
        description:
            "Bootstrap é um framework para desenvolvimento de componentes de interface e front-end para sites e aplicações web baseado em modelos de design para a tipografia.",
    },
    sass: {
        img: { DiSass },
        name: "SASS",
        description:
            "SASS é uma linguagem de extensão do CSS que cria folhas de estilo com uma sintaxe incrível.",
    },
    tailwind: {
        img: { SiTailwindcss },
        name: "TAILWIND",
        description:
            "Tailwind é um framework CSS que fornece componentes para sua estilização.",
    },
    vue: {
        img: { FaVuejs },
        name: "VUEJS",
        description:
            "VueJS é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.",
    },
    git: {
        img: { DiGit },
        name: "GIT",
        description:
            "Git é um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de software.",
    },
    github: {
        img: { DiGithubBadge },
        name: "GITHUB",
        description:
            "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.",
    },
    figma: {
        img: { FaFigma },
        name: "FIGMA",
        description:
            "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.",
    },
    node: {
        img: { FaNodeJs },
        name: "NODEJS",
        description:
            "Node.js é um software que permite a execução de códigos JavaScript fora de um navegador web.",
    },
    typeorm: { img: {}, name: "TYPEORM", description: "" },
    python: {
        img: { DiPython },
        name: "PYTHON",
        description:
            "Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte",
    },
    c: { img: {}, name: "C", description: "" },
    java: { img: { DiJava }, name: "JAVA", description: "" },
};

export { technologiesData };
