import {
    Button,
    Typography,
    Stack,
    CircularProgress,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useCallback, useContext, useLayoutEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { deleteDataWithJsonAsync, getDataWithJsonAsync, postDataWithJsonAsync } from "./Api";
import { SnackbarContext } from "./SnackbarContext";
import { Spacer } from "./styleUtil/Spacer";
import { Thought } from "./Thought";
import { ThoughtForm } from "./ThoughtForm";

export const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { control, handleSubmit, setValue, reset, getValues } = useForm<Thought>();
    const [loading, setLoading] = useState(true);

    const { setAppSnackbar } = useContext(SnackbarContext);

    const onSubmit: SubmitHandler<Thought> = async (data: Thought) => {
        const error = await postDataWithJsonAsync("/api/update", data);

        if (!error) {
            setAppSnackbar({
                isOpen: true,
                message: "更新が完了しました。",
                autoHideDuration: 6000,
                severity: "success"
            });
            navigate("/");
        } else {
            setAppSnackbar({
                isOpen: true,
                message: `更新に失敗しました。 ${error}`,
                autoHideDuration: 6000,
                severity: "error"
            });
        }
    };

    const onClickDelete = async () => {
        await deleteDataWithJsonAsync(`/api/${id}`, getValues("id"));

        setAppSnackbar({
            isOpen: true,
            message: "削除が完了しました。",
            autoHideDuration: 6000,
            severity: "success"
        });
        navigate("/");
    }

    const fetchData = useCallback(async () => {
        const thought = await getDataWithJsonAsync<Thought>(`/api/${id}`);

        if (thought) {
            reset(thought);
        } else {
            setAppSnackbar({
                isOpen: true,
                message: `id: (${id}) の読み込みに失敗しました。`,
                autoHideDuration: 6000,
                severity: "error"
            });
        }

        setLoading(false);
    }, [id, reset, setAppSnackbar]);

    useLayoutEffect(() => {
        fetchData();
    }, [fetchData])

    if (loading) return <CircularProgress />;

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Detail
            </Typography>
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
        </>
    );
};
