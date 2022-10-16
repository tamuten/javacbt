import {
    Button,
    Grid,
    Typography,
    Stack,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { postDataWithJsonAsync } from "./Api";
import { Thought } from "./Thought";
import { ThoughtForm } from "./ThoughtForm";

export const Register = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, setValue } = useForm<Thought>({
        defaultValues: {
            thoughtDateTime: new Date(),
            situation: "状況",
            feeling: "感情",
            percent: 50,
            automaticThinking: "自動思考を入力",
            base: "根拠",
            objection: "反証",
            newThinking: "適応的思考",
            newFeeling: "今の気分",
            newPercent: 50
        }
    });

    const onSubmit: SubmitHandler<Thought> = async (data: Thought) => {
        await postDataWithJsonAsync("api/create", data);
        navigate("/");
    };

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Register
            </Typography>
            <Grid container spacing={3} justifyContent="center">
                <Grid item xs={12}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Stack component="form" onSubmit={handleSubmit(onSubmit)} noValidate spacing={3}>
                            <ThoughtForm control={control} setValue={setValue} />
                            <Button variant="contained" type="submit" size="large">
                                登録
                            </Button>
                        </Stack>
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </>
    );
};
