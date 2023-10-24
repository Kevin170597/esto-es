import { AddFrom } from "./widgets"
import type { Metadata } from "next"
import { Header } from "@/components"

export const metadata: Metadata = {
    title: "Add project"
}

export default function AddProject() {

    return (
        <div className="h-[92vh] bg-bg-light-2 dark:bg-bg-dark-2">
            <Header title="Add project" />
            <AddFrom />
        </div>
    )
}