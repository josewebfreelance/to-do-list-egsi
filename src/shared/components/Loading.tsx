import {Backdrop, CircularProgress} from "@mui/material";
import {useGeneralStore} from "../../stores/general.store.ts";

export const Loading = () => {
    const isLoading = useGeneralStore(state => state.isLoading);

    return(
        <>
            {
                isLoading ?
                    <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 999 }}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                    : null
            }
        </>
    );
};
