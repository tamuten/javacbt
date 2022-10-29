import { AlertColor } from "@mui/material";
import { createContext } from "react";

export type AppSnackbar = {
    isOpen: boolean;
    message: string;
    severity: AlertColor;
    autoHideDuration?: number;
}

type TSnackbarContext = {
    setAppSnackbar: (value: AppSnackbar) => void;
}

export const SnackbarContext = createContext<TSnackbarContext>({} as TSnackbarContext);