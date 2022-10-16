import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"

type Props = {
    open: boolean;
    text: string;
    handleClose: () => void;
}

export const ErrorDialog = (props: Props) => {
    const { open, text, handleClose } = props;

    return <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            エラー
        </DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {text}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>
                OK
            </Button>
        </DialogActions>
    </Dialog>;
}