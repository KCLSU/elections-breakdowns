import { useEffect, useState } from "react"
import { MSLCountResponse } from "../types";

type UseCountDataT = {
    setPostId: (id: number) => void;
    data: MSLCountResponse | null
}

const useCountData = (): UseCountDataT => {
    const [postId, setPostId] = useState<number | null>(null);
    const [data, setData] = useState(null)

    async function fetchData() {
        if (postId) {
            const result = await (await fetch(`https://www.kclsu.org/svc/voting/elections/164/posts/${postId}/result`)).json();
            console.log(result)
            setData(result)
        }
    }

    useEffect(() => {
        fetchData();
    }, [postId])

    return {
        setPostId,
        data
    }
}

export default useCountData;