import Title from "../components/Title";
import ProjectList from "../components/projects/ProjectsList";



export default function Projects() {

    return (
        <div id="projects" className="flex flex-col items-center mb-16 mx-10 min-h-screen">
            <Title text="My Projects." />
            <h3 className="page-description text-center">
                Here are some of the projects I&apos;ve worked on.
            </h3>

            <ProjectList />

        </div>
    );
}