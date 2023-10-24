
import type { Metadata } from "next"
import { Header } from "@/components"
import { UpdateForm } from "./widgets"
import { getProjectById } from "@/services"

export const metadata: Metadata = {
    title: "Update project"
}

const fetchProject = (_id?: string) => {
    return getProjectById(_id)
}

export default async function UpdateProject({ params, searchParams }: { params?: {}, searchParams?: { id: string }}) {
    const project = await fetchProject(searchParams?.id)

    return (
        <div className="h-[92vh] bg-bg-light-2 dark:bg-bg-dark-2">
            <Header title="Edit project" />
            <UpdateForm data={project} _id={searchParams?.id || ""} />
        </div>
    )
}