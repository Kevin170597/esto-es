import Link from "next/link"

interface Props {
    title: string,
    addButton?: boolean
}

export const Header = ({ title, addButton }: Props) => {

    return (
        <div className="mb-4 px-6 h-10 flex items-center justify-between bg-bg-light-1 dark:bg-bg-dark-1 border-b-solid border-b border-border-light dark:border-border-dark">
            <h1 className="font-bold text-text-light-1 dark:text-text-dark-1">{title}</h1>
            {addButton &&
                <Link
                    className="bg-primary-light dark:bg-primary-dark text-white px-2 py-1 rounded"
                    href={"/add"}>
                    + Add project
                </Link>
            }
        </div>
    )
}