import { useEffect, useState } from "react"
import { MSLCountResponse } from "../types";

type UseCountDataT = {
    setPostId: (id: number) => void;
    clearData: () => void;
    data: MSLCountResponse | null;
    loading: boolean;
    error: boolean;
}

const useCountData = (): UseCountDataT => {
    const [postId, setPostId] = useState<number | null>(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    async function fetchData() {
        if (postId) {
            setLoading(true);
            try {
                const result = await (await fetch(`https://www.kclsu.org/svc/voting/elections/164/posts/${postId}/result`)).json();
                if (!result) throw new Error();
                setData(result);
                setLoading(false);
            } catch (e) {
                console.log(e);
                setError(true);
                setLoading(false);
            }
        }
    }

    function clearData() {
        setError(false);
        setPostId(null);
        setData(null);
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [postId])

    return {
        setPostId,
        clearData,
        data,
        loading,
        error
    }
}

export default useCountData;