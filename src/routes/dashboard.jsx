import { useEffect, useState } from "react";

export default function Dashboard() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/urls',{
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
            .then((response) =>{
                if(!response.ok){
                    setError('Something went wrong');
                };
                return response.json();
            })
            .then((data) => {
                setData(data.data);
                setLoading(false);
            });
        }
        
        fetchData();
    }, []);


    return(
        <>
        <h1>Dashboard</h1>
        <h2>Welcome</h2>
        {loading && <div>A moment please...</div>}
        {error && (
            <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {console.log(data)}
        <ul>
        {data && (data.map((url) => {
            {console.log(url.longUrl)}
             return <li key={url.id}> {url.longUrl}</li>
            
        }))}
        </ul>
        </>
    )
}