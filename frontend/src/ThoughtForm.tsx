import { Slider, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { Thought } from "./Thought";

type Props = {
    control: Control<Thought, any>;
    setValue: UseFormSetValue<Thought>;
}

export const ThoughtForm = ({ control, setValue }: Props) => {
    return <> <Controller name="thoughtDateTime" control={control} render={({ field }) =>
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
    </>;
}