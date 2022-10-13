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
import { useLayoutEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { postDataWithJsonAsync } from "./Api";
import { Thought } from "./Thought";

export const Detail = () => {
    const navigate = useNavigate();
    const id = useParams();
    console.log(id);
    const { control, handleSubmit, setValue, formState: { errors } } = useForm<Thought>();

    const onSubmit: SubmitHandler<Thought> = async (data: Thought) => {
        await postDataWithJsonAsync("api/update", data);
        navigate("/");
    };

    useLayoutEffect(() => {

    }, [])

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Detail
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
                            <Stack direction="row">
                                <Button variant="contained" type="submit">
                                    更新
                                </Button>
                                <Button variant="contained" color="error">
                                    削除
                                </Button>
                            </Stack>

                        </Stack>
                    </LocalizationProvider>
                </Grid>
            </Grid>
        </>
    );
};
