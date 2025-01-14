import { useState, useEffect } from "react";

const useProfileData = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);
 
 const fetchProfileData = async () => {
    try{
        // TODO: need to find a way to combine fetches from API
       
        const response = await fetch("http://localhost:8080/api/users");
        const data = await response.json();
        
       
        if(!response.ok){
            throw new Error("Error fetching data");
        }

        setData(data);
        setLoading(false);
    } catch (error) {
        console.error(error);
        setLoading(false);
    }
    }

    // useEffect 
    useEffect(() => {
        fetchProfileData();
    }, []);

console.log(data);

    return { data, loading };

}




export default useProfileData;


