import {
    AuthenticationStore,
    AuthenticationStoreActions
} from "../infraestructure";
import { create } from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";
import axios from "axios";
import { Constants } from "../config";
import toast from "react-hot-toast";
import {useGeneralStore} from "./general.store.ts";

const {setIsLoading} = useGeneralStore.getState();

export const useAuthenticationStore = create<AuthenticationStore & AuthenticationStoreActions>(
    persist(
        (set, get) => ({
            token: null,
            email: '',

            setEmail: (value: string) => set({ email: value }),

            login: async () => {
                try {
                    setIsLoading(true);

                    const response = await axios.post(`${Constants.BASEURL}login`, {email: get().email});
                    const token = response.data.data.token;

                    set({ token });
                } catch (e) {
                    toast.error(`Inicio de sesión fállido`);
                    setIsLoading(false);
                } finally {
                    setIsLoading(false);
                }
            },
            logout: () => {
                set({token: null});
            },
        }),
        {
            name: "auth-storage", // name of the item in storage
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export const getTokenFromSessionStorage = () => {
    const tokenStorage = sessionStorage.getItem("auth-storage");

    if (!tokenStorage) return null;

    const tokenParse = JSON.parse(tokenStorage!);

    return tokenParse.state;
};
