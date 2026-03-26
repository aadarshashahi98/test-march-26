import { useState } from "react";

function FetchData() {
    const url ="example.com"
    const [data, setData] = useState()
    const fetchData = async (req, res) => {
        try {
            await fetch(url)
        } catch (error) {
            throw new Error("Fetch Failed: ", error);
            
        }
    }

    return(
        <>
            <div>
                {data.map((item, index) =>
                    <div>
                        <span>{item.id}</span>
                        <span>{item.title}</span>
                        <span>{item.description}</span>
                        <img src={item.image} alt={item.title}/>
                        <span>{item.status}</span>
                        <spam>{item.date}</spam>
                    </div>
                )}
            </div>
        </>
    )
}
export default FetchData