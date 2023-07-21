import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

export default function Dashboard() {
    const token = localStorage.getItem("token");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [showModal, setShowModal] = useState(false); // State variable to control modal visibility
    const [selectedUrlData, setSelectedUrlData] = useState(null); // State variable to store selected URL data

    const handleUrl = (e) => {
        setUrl(e.target.value);
    };

    const handleShorten = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/shorten", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    url: url,
                }),
            });

            if (response.status !== 201) {
                setError("Something went wrong");
            } else {
                window.location = "/dashboard";
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleGetLongUrl = (urlData) => {
        // Set the selected URL data and open the modal
        setSelectedUrlData(urlData);
        setShowModal(true);
    };

    useEffect(() => {
        if (!token) {
            window.location = "/login";
        }
        async function fetchData() {
            const response = await fetch("/urls", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (!response.ok) {
                        setError("Something went wrong");
                        window.location = "/login";
                    }
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
                    <label className="label">Url</label>
                    <input
                        className="input"
                        type="email"
                        onChange={handleUrl}
                        placeholder="Url to be shortened"
                    />
                    <button onClick={handleShorten}>Shorten</button>
                </div>
            </Form>
            {loading && <div>A moment please...</div>}
            {error && <div>{` ${error}`}</div>}
            <ul>
                {data &&
                    data.map((urlData) => (
                        <div className="shortenForm" key={urlData.id}>
                            <li>{urlData.shortUrl}</li>
                            <button onClick={() => handleGetLongUrl(urlData)}>Get long Url</button>
                            <button>Edit</button>
                        </div>
                    ))}
            </ul>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="modal-content">
                            <h2>URL Details</h2>
                            {selectedUrlData && (
                                <>
                                    <p>
                                        <strong>Short URL:</strong> {selectedUrlData.shortUrl}
                                    </p>
                                    <p>
                                        <strong>Long URL:</strong> {selectedUrlData.longUrl}
                                    </p>
                                    {/* Add other data you want to display here */}
                                </>
                            )}
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

