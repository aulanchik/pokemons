import { useState, useLayoutEffect } from "react";
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

    useLayoutEffect(() => {
        let isMounted = true;
        const getData = async () => {
            const [predominantColor, paletteColors] = await Promise.all([
                getColor(imageUrl, "hex", "anonymous"),
                getPalette(imageUrl, colorCount, "hex", "anonymous")
            ]);
            if (isMounted) {
                setColorData({ predominantColor, paletteColors, loading: false });
            }
        };
        getData();
        return () => {
            isMounted = false;
        };
    }, [imageUrl, colorCount]);

    return colorData;
};

export default useColorData;
