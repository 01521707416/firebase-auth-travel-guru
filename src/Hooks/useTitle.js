import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `Travel Guru | ${title}`
    }, [title])
}

export default useTitle