import { useState, useEffect } from "react";
import { PaletteColorData } from "@/types";
import { getPalette } from "color-thief-react";

/**
 * Custom hook that fetches a color palette for a given image.
 *
 * @param {string} imageSrc - The source URL of the image.
 * @param {number} [colorCount=3] - The number of colors to fetch from the image.
 * @return {PaletteColorData} An object containing the fetched color palette and a loading flag.
 */
const useGetColorPalette = (imageSrc: string, colorCount: number = 3): PaletteColorData => {
    const [paletteData, setPaletteData] = useState<PaletteColorData>({
        palette: null,
        loading: true
    });

    useEffect(() => {
        let isMounted = true;
        const getData = async () => {
            try {
                const palette = await getPalette(imageSrc, colorCount, "hex", "anonymous");
                if (isMounted) {
                    setPaletteData({ palette, loading: false });
                }
            } catch (error) {
                console.error("Error fetching color palette data:", error);
                if (isMounted) {
                    setPaletteData({ palette: null, loading: false });
                }
            }
        };
        if (imageSrc) {
            getData();
        }
        return () => {
            isMounted = false;
        };
    }, [imageSrc, colorCount]);

    return paletteData;
};

export default useGetColorPalette;
