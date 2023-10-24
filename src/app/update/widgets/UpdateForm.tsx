"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from "next/navigation"
import { updateProject } from "@/services"
import { Input, Select } from "@/components"
import { ProjectInterface } from "@/interfaces"

type Inputs = {
    title: string,
    description: string,
    projectManager: string,
    assignedTo: string,
    status: string
}

export const UpdateForm = ({ _id, data }: { _id: string, data: ProjectInterface }) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await updateProject(_id, data)
        router.push("/")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-bg-light-1 dark:bg-bg-dark-1 p-6">
            <Input
                inputType="text"
                label="Title"
                name="title"
                required
                errors={errors}
                errorMessage="Complete title field."
                register={register}
                defaultValue={data.title}
            />
            <Input
                inputType="text"
                label="Description"
                name="description"
                required
                errors={errors}
                errorMessage="Complete decription field."
                register={register}
                defaultValue={data.description}
            />
            <Select 
                inputType="select"
                label="Project manager"
                name="projectManager"
                required
                register={register}
                options={[{ optionLabel: "Ossas", optionValue: "Ossas" }, { optionLabel: "Once", optionValue: "Once" }]}
                defaultValue={data.projectManager}
            />
            <Select 
                inputType="select"
                label="Assigned to"
                name="assignedTo"
                required
                register={register}
                options={[{ optionLabel: "San", optionValue: "San" }, { optionLabel: "Frida", optionValue: "Frida" }]}
                defaultValue={data.assignedTo}
            />
            <Select 
                inputType="select"
                label="Status"
                name="status"
                required
                register={register}
                options={[{ optionLabel: "Enabled", optionValue: "enabled" }, { optionLabel: "Disabled", optionValue: "disabled" }]}
                defaultValue={data.status}
            />
            <button
                type="submit"
                className="bg-primary-light dark:bg-primary-dark text-text-dark-1 px-4 py-2 rounded"
            >
                Save changes
            </button>
        </form>
    )
}