import { useState, useEffect } from "react";
import { DominantColorData } from "@/types";
import { getColor } from "color-thief-react";

/**
 * Custom hook that fetches the dominant color of an image.
 *
 * @param {string} imageSrc - The source URL of the image.
 * @return {DominantColorData} An object containing the dominant color and a loading flag.
 */
const useGetDominantColor = (imageSrc: string): DominantColorData => {
    const [dominantColor, setDominantColorData] = useState<DominantColorData>({
        color: null,
        loading: true
    });

    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
            try {
                const color = await getColor(imageSrc, "rgbString", "anonymous");
                if (isMounted) {
                    setDominantColorData({ color, loading: false });
                }
            } catch (error) {
                console.error("Error fetching dominant color data:", error);
                if (isMounted) {
                    setDominantColorData({ color: null, loading: false });
                }
            }
        };
        if (imageSrc) {
            getData();
        }
        return () => {
            isMounted = false;
        };
    }, [imageSrc]);

    return dominantColor;
};

export default useGetDominantColor;
