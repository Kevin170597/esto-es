import { Schema, model, models } from "mongoose"
import { ProjectInterface } from "@/interfaces"

const ProjecstSchema = new Schema<ProjectInterface>(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        projectManager: {
            type: String,
            required: true
        },
        assignedTo: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        collection: "projects"
    }
)

export const ProjectsModel = models["projects"] || model("projects", ProjecstSchema)