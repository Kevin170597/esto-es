import Link from "next/link"
import Image from "next/image"
import { ProjectInterface } from "@/interfaces"
import { ProjectCardOptions } from "."
import moment from "moment"

export const ProjectCard = ({ project }: { project: ProjectInterface }) => {

    return (
        <div className="p-4 flex justify-between items-start bg-bg-light-1 dark:bg-bg-dark-1 border-b-solid border-b border-border-light dark:border-border-dark relative">
            <div className="flex flex-col">
                <Link className="text-text-light-1 dark:text-text-dark-1 hover:underline" href={`/update?id=${project._id}`}>{project.title}</Link>
                <small className="text-gray-400">Creation date: {moment(project.createdAt).format("D/M/YY h:mm a")} </small>
                <div className="flex items-center gap-2 mt-2">
                    <Image
                        className="rounded-full"
                        src={"/profile.jpg"}
                        width={24}
                        height={24}
                        alt="profile"
                    />
                    <p className="text-sm text-text-light-1 dark:text-text-dark-1">{project.assignedTo}</p>
                </div>
            </div>
            <ProjectCardOptions _id={project._id || ""} />
        </div>
    )
}