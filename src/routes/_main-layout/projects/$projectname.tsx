import { SkillConfig } from "@/components/home/skills-card";
import ProjectCarousel from "@/components/projects/project-carousel";
import { Card, CardContent } from "@/components/ui/card";
import DynamicSkillBadgeList from "@/components/ui/dynamic-skill-badge-list";
import { getSkills } from "@/lib/skills-registry";
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

    const techStack: SkillConfig[] = getSkills(project?.techstack ?? []);
    return (
        <div>
            <h1 className="text-5xl font-bold text-center mt-12 mb-6">{project?.title}</h1>
            <DynamicSkillBadgeList skills={techStack} />
            <div className="flex flex-col md:flex-row gap-6 mt-20">
                <div className="flex-1 space-y-4">
                    <ProjectCarousel />
                </div>
                <div className="flex-1 space-y-4 pl-8">
                    <Card className="min-h-96">
                        <CardContent>
                            Col 2
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default ProjectPage;