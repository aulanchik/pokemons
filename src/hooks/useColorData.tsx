import { useState, useEffect } from "react";
import { getColor, getPalette } from "color-thief-react";

interface ColorData {
    paletteColors: string[] | null;
    predominantColor: string | null;
    loading: boolean;
}

const useColorData = (imageUrl: string, colorCount: number = 5) => {
    const [colorData, setColorData] = useState<ColorData>({
        predominantColor: null,
        paletteColors: null,
        loading: true
    });

    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
            try {
                const [predominantColor, paletteColors] = await Promise.all([
                    getColor(imageUrl, "hex", "anonymous"),
                    getPalette(imageUrl, colorCount, "hex", "anonymous")
                ]);
                if (isMounted) {
                    setColorData({ predominantColor, paletteColors, loading: false });
                }
            } catch (error) {
                console.error("Error fetching color data:", error);
                if (isMounted) {
                    setColorData({ predominantColor: null, paletteColors: null, loading: false });
                }
            }
        };
        if (imageUrl) {
            getData();
        }
        return () => {
            isMounted = false;
        };
    }, [imageUrl, colorCount]);

    return colorData;
};

export default useColorData;
