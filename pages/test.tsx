import useSwr from 'swr'
import {useState} from "react";

const fetcher = (url: string) => fetch(url).then((res) => {
    if(!res.ok){
        const error = new Error('An error occurred while fetching the data.')
        throw error
    }
    return res.json()
})

export default function UserPage() {
    const [shouldAsk, setShouldAsk] = useState(false);

    const {data, error} = useSwr<JSON>(
        shouldAsk ? "/api/buttonAction" : null,
        fetcher
    );
    function handleAsk(){
        setShouldAsk(true);
    }


    return(
        <>
            <button disabled={shouldAsk} onClick={handleAsk}>PREMIMI</button>
            {(data && !error) && <p> data is : {JSON.stringify(data)}</p>}
            {(error) && <p> error is : {error.message} </p>}
            <p>data: {data?JSON.stringify(data):"nulla"} error: {error?"true":"false"}</p>
        </>);
    //if (data) return <div>Failed to load user</div>
    //if (!data) return <div>Loading...</div>
    //return (<><p>Tutto bene{JSON.stringify(data)}</p></>)
}