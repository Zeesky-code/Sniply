import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export default function Dashboard() {
    const token = localStorage.getItem('token');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const handleUrl = (e) => {
        setUrl(e.target.value);
    }
    const handleShorten = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/shorten', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    url: url
                }),
            })
            
            if(response.status != 201){
                setError('Something went wrong');
            }else{
                fetchData();
            }
        }catch(err) {
            console.log(err);
        }
    }
    useEffect(() => {
        if (!token) {
            window.location = '/login';
        }
        async function fetchData() {
            const response = await fetch('/urls', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    "Authorization": `Bearer ${token}`
                }
            })
                .then((response) => {
                    if (!response.ok) {
                        setError('Something went wrong');
                        window.location = '/login';
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


    return (
        <>
            <h1>Dashboard</h1>
            <Form>
                <div className="shortenForm"> 
                    <label className="label" >Url</label>
                    <input className="input" type="email" onChange={handleUrl} placeholder="Url to be shortened" />
                    <button onClick={handleShorten}> Shorten </button>
                </div>
                
            </Form>
            {loading && <div>A moment please...</div>}
            {error && (
                <div>{` ${error}`}</div>
            )}
            {console.log(data)}
            <ul>
                {data && (data.map((url) => {
                    { console.log(url.longUrl) }
                    return <li key={url.id}> {url.longUrl}</li>

                }))}
            </ul>
        </>
    )
}