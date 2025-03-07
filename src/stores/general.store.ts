import {create} from "zustand";
import {General, GeneralActions} from "../infraestructure";

export const useGeneralStore = create<General & GeneralActions>((set) => ({
    isLoading: false,

    setIsLoading: (value: boolean) => set({isLoading: value})
}))
