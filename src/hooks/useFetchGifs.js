import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ({category, cantValue}) => {
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async() => {
        const newImage = await getGifs(category, cantValue);
        setImages(newImage)
        setIsLoading(false)
    }
    
    useEffect(() => {
        getImages();
    }, [])
 
    return {images, isLoading}
}
