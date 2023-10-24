import { getProjects } from "@/services"
import { ProjectCard, Pagination } from "./widgets"
import { Header } from "@/components"

const fetchProjects = (params?: string, page?: string) => {
  return getProjects(params, page)
}

export default async function Home({ params, searchParams }: { params?: {}, searchParams?: { title: string, page: string }}) {
  const projects = await fetchProjects(searchParams?.title, searchParams?.page ?? "1")

  return (
    <div className="h-[92vh] bg-bg-light-2 dark:bg-bg-dark-2">
      <Header addButton title="My projects" />
      <div className="flex flex-col">
        {projects?.data.map((e) =>
          <ProjectCard key={e._id} project={e} />
        )}
      </div>
      <Pagination currentPage={projects.currentPage} totalPages={projects.totalPages} />
    </div>
  )
}
