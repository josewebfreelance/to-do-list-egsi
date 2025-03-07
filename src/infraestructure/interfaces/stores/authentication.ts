export interface AuthenticationStore {
    token: string | null;
    email: string;
}

export interface AuthenticationStoreActions {
    setEmail: (value: string) => void;

    login: () => void;
    logout: () => void;
}
