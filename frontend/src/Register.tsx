import {
    Button,
    Grid,
    TextField,
    Typography,
    Stack,
    Slider,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Thought } from "./Thought";

export const Register = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, setValue, formState: { errors } } = useForm<Thought>({
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
        await fetch("api/create", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
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
                            <Controller name="thoughtDateTime" control={control} render={({ field }) =>
                                <DateTimePicker
                                    {...field}
                                    label="日時"
                                    inputFormat="yyyy/MM/dd HH:mm"
                                    onChange={(newValue) => setValue("thoughtDateTime", newValue)}
                                    renderInput={(params) => <TextField {...params} variant="standard" />}
                                />
                            } />
                            <Controller name="feeling" control={control} render={({ field }) => (
                                <TextField {...field} type="text" variant="standard" fullWidth label="気分" />
                            )}
                            />
                            <Controller name="percent" control={control} render={({ field }) =>
                                <Slider {...field}
                                    step={1}
                                    min={0}
                                    max={100}
                                    defaultValue={50}
                                    valueLabelDisplay="on"
                                />
                            } />

                            <Controller name="situation" control={control} render={({ field }) =>
                                <TextField {...field} type="text" variant="standard" multiline fullWidth label="状況" />
                            } />
                            <Controller name="automaticThinking" control={control} render={({ field }) =>
                                <TextField {...field} type="text" variant="standard" multiline fullWidth label="自動思考" />
                            } />
                            <Controller name="base" control={control} render={({ field }) =>
                                <TextField {...field} type="text" variant="standard" multiline fullWidth label="根拠" />
                            } />
                            <Controller name="objection" control={control} render={({ field }) =>
                                <TextField {...field} type="text" variant="standard" multiline fullWidth label="反証" />
                            } />
                            <Controller name="newThinking" control={control} render={({ field }) =>
                                <TextField {...field} type="text" variant="standard" multiline fullWidth label="適応的思考" />
                            } />
                            <Controller name="newFeeling" control={control} render={({ field }) => (
                                <TextField {...field} type="text" variant="standard" fullWidth label="今の気分" />
                            )} />
                            <Controller name="newPercent" control={control} render={({ field }) =>
                                <Slider
                                    {...field}
                                    step={1}
                                    min={0}
                                    max={100}
                                    defaultValue={50}
                                    valueLabelDisplay="on"
                                />
                            } />
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
