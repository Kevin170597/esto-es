"use client"
import Link from "next/link"
import { getProjects } from "@/services"
import { useRouter } from "next/navigation"
import { useForm, SubmitHandler } from "react-hook-form"
import { ThemeToggle } from "./ThemeToggle"
import { Icon } from "@/components"

type Inputs = {
    title: string
}

export const SearchBar = () => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await getProjects(data.title)
        router.push(`/?title=${data.title}`)
    }

    return (
        <div className="h-12 bg-bg-light-1 dark:bg-bg-dark-1 border-b-solid border-b border-border-light dark:border-border-dark flex items-center gap-4 px-4 py-2">
            <Link className="flex items-center" href={"/"}>
                <img src="/logo.png" className="h-6" alt="logo" />
            </Link>
            <form className="flex mx-auto h-8 w-[70%]" onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="w-full text-text-light-1 dark:text-text-dark-1 bg-bg-light-1 dark:bg-bg-dark-1 px-4 rounded-l border border-solid border-border-light dark:border-border-dark focus:outline-none"
                    type="text"
                    {...register("title")}
                    placeholder="Buscar..."
                />
                <button
                    className="px-2 bg-primary-light dark:bg-primary-dark rounded-r text-text-dark-1"
                    type="submit"
                >
                    <Icon iconName="search" fill="#fff" />
                </button>
            </form>
            <ThemeToggle />
        </div>
    )
}