import {
    Button,
    Grid,
    Typography,
    Stack,
    CircularProgress,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useCallback, useLayoutEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDataWithJsonAsync, getDataWithJsonAsync, postDataWithJsonAsync } from "./Api";
import { ErrorDialog } from "./ErrorDialog";
import { Spacer } from "./styleUtil/Spacer";
import { Thought } from "./Thought";
import { ThoughtForm } from "./ThoughtForm";

export const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { control, handleSubmit, setValue, reset, getValues } = useForm<Thought>();
    const [loading, setLoading] = useState(true);
    const [errorText, setErrorText] = useState("");
    const [dialogOpen, setDialogOpen] = useState(false);

    const onSubmit: SubmitHandler<Thought> = async (data: Thought) => {
        await postDataWithJsonAsync("/api/update", data);
        navigate("/");
    };

    const onClickDelete = async () => {
        await deleteDataWithJsonAsync(`/api/${id}`, getValues("id"));
        navigate("/");
    }

    const fetchData = useCallback(async () => {
        const thought = await getDataWithJsonAsync<Thought>(`/api/${id}`);

        if (thought) {
            reset(thought);
        } else {
            setErrorText(`id: (${id}) の読み込みに失敗しました。`);
            setDialogOpen(true);
        }

        setLoading(false);
    }, [id, reset]);

    const handleClose = () => {
        setDialogOpen(false);
    };

    useLayoutEffect(() => {
        fetchData();
    }, [fetchData])

    if (loading) return <CircularProgress />;

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Detail
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack component="form" onSubmit={handleSubmit(onSubmit)} noValidate spacing={3}>
                            <ThoughtForm control={control} setValue={setValue} />
                            <Stack direction="row" spacing={3}>
                                <Button variant="contained" color="error" onClick={onClickDelete}>
                                    削除
                                </Button>
                                <Spacer />
                                <Button variant="contained" type="submit">
                                    更新
                                </Button>
                            </Stack>
                        </Stack>
                    </LocalizationProvider>
                </Grid>
            </Grid>
            <ErrorDialog open={dialogOpen} text={errorText} handleClose={handleClose} />
        </>
    );
};
