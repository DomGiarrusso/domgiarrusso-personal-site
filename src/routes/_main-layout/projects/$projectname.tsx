import { supabase } from "@/lib/supabase";
import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute('/_main-layout/projects/$projectname')({
    loader: async ({params}) => {
        const { projectname } = params;
        const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', projectname)
        .single()

        if (error) {
            console.error("Error fetching project", error)
        }
        return { project: data ?? null }
    },
    component: ProjectPage,
});

function ProjectPage() {
    const { project } = Route.useLoaderData();
    return (
        <div>
            <h1>{project?.title}</h1>
        </div>
    );
}

export default ProjectPage;