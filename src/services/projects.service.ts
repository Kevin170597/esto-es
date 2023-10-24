"use server"
import { ProjectInterface } from "@/interfaces"
import { dbConnect } from "@/lib"
import { ProjectsModel } from "@/models"

export const getProjects = async (searchKey?: string, page?: string | 1): Promise<{ totalPages: number, currentPage: number, data: ProjectInterface[] }> => {
    await dbConnect()
    let limit = 6
    if (!searchKey) {
        const count = await ProjectsModel.find({}).countDocuments()
        const res = await ProjectsModel.find({}, null, { limit, skip: ((Number(page) - 1) * limit), sort: { _id: -1 } })
        return {
            totalPages: Math.ceil(count/limit),
            currentPage: Number(page),
            data: res
        }
    } else {
        const count = await ProjectsModel.find({
            "title": { $regex: searchKey, $options: "i" }
        }).countDocuments()
        const res = await ProjectsModel.find({
            "title": { $regex: searchKey, $options: "i" }
        }, null, { limit, skip: ((Number(page) - 1) * limit), sort: { _id: -1 } })
        return {
            totalPages: Math.ceil(count/limit),
            currentPage: Number(page),
            data: res
        }
    }
}

export const getProjectById = async (_id?: string): Promise<ProjectInterface> => {
    await dbConnect()
    const res = await ProjectsModel.findOne({ _id })
    return res
}

export const addProject = async (project: ProjectInterface) => {
    await dbConnect()
    const res = await ProjectsModel.create(project)
    return res
}

export const updateProject = async (_id: string, data: any) => {
    await dbConnect()
    const res = await ProjectsModel.updateOne({ _id }, data)
    return res
}

export const deleteProject = async (_id: string) => {
    await dbConnect()
    const res = await ProjectsModel.deleteOne({ _id })
    return res
}