"use client"
import { useState } from "react"
import Link from "next/link"
import { deleteProject } from "@/services"
import { useRouter } from "next/navigation"
import { Icon } from "@/components"

export const ProjectCardOptions = ({ _id }: { _id: string }) => {
    const router = useRouter()
    const [menu, setMenu] = useState<boolean>(false)
    const [deleteModal, setDeleteModal] = useState<boolean>(false)

    const handleDelete = async () => {
        await deleteProject(_id)
        setDeleteModal(false)
        setMenu(false)
        router.refresh()
    }

    return (
        <>
            <button onClick={() => setMenu(!menu)}>
                <Icon iconName="vertical-dots" fill="#5d5d5d" />
            </button>
            {menu &&
                <div className="z-10 absolute bg-bg-light-1 dark:bg-bg-dark-1 right-6 top-10 flex flex-col rounded shadow-1">
                    <Link
                        className="text-text-light-1 dark:text-text-dark-1 flex gap-2 border-b border-b-solid border-b-border-light dark:border-border-dark p-4"
                        href={`/update?id=${_id}`}
                    >
                        <Icon iconName="edit" fill="#5d5d5d" />
                        Edit
                    </Link>
                    <button
                        className="p-4 flex gap-2 text-text-light-1 dark:text-text-dark-1"
                        onClick={() => setDeleteModal(true)}
                    >
                        <Icon iconName="delete" fill="#5d5d5d" />
                        Delete
                    </button>
                </div>
            }
            {deleteModal &&
                <div className="z-10 flex items-center justify-center bg-[#00000031] fixed h-full w-full top-0 left-0">
                    <div className="flex flex-col items-center bg-bg-light-1 dark:bg-bg-dark-1 rounded py-4 px-6">
                        <p className="mb-4 text-text-light-1 dark:text-text-dark-1">Are you sure?</p>
                        <div className="flex gap-2">
                            <button
                                onClick={handleDelete}
                                className="bg-primary-light dark:bg-primary-dark text-text-dark-1 px-4 py-2 rounded"
                            >
                                Delete
                            </button>
                            <button
                                onClick={() => setDeleteModal(false)}
                                className="underline px-4 py-2 rounded text-text-light-1 dark:text-text-dark-1"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}