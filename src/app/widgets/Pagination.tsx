"use client"
import { useRouter } from "next/navigation"

export const Pagination = ({ currentPage, totalPages }: { currentPage: number, totalPages: number }) => {
    const router = useRouter()

    return (
        <div className="bg-bg-light-1 dark:bg-bg-dark-1 flex px-4 py-4">
            {currentPage > 1 &&
                <button
                    onClick={() => router.push(`/?page=${currentPage - 1}`)}
                    className="bg-primary-light dark:bg-primary-dark rounded px-4 py-2 text-text-dark-1"
                >
                    Prev
                </button>
            }
            {currentPage < totalPages &&
                <button
                    onClick={() => router.push(`/?page=${currentPage + 1}`)}
                    className="bg-primary-light dark:bg-primary-dark rounded ml-auto px-4 py-2 text-text-dark-1"
                >
                    Next
                </button>
            }
        </div>
    )
}