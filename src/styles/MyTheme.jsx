import {grey} from "@mui/material/colors";


const getDesignTokens = (mode) => ({

    palette: {
        mode,
        ...(mode === 'light'
            ? {
                favColor: {
                    main: grey[300]
                }
            }
            : {
                favColor: {
                    main: grey[800]
                }
            }),

    },
});

export default getDesignTokens;