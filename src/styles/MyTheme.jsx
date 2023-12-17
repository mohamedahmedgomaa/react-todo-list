import {cyan, deepPurple, grey} from "@mui/material/colors";


const getDesignTokens = (mode) => ({

    palette: {
        mode,
        ...(mode === 'light'
            ? {
                moha: {
                    main: deepPurple[600],
                },
                favColor: {
                    main : grey[300]
                }
            }
            : {
                moha: {
                    main: cyan[700],
                },
                favColor: {
                    main : grey[800]
                }
            }),

    },
});

export default getDesignTokens;