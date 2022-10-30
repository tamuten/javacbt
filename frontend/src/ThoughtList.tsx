import { useState, useLayoutEffect } from "react";
import { Thought } from "./Thought";
import { formatDateTime } from "./formatDateTime";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getDataWithJsonAsync } from "./Api";

export const ThoughtList = () => {
    const navigate = useNavigate();
    const [thoughts, setThoughts] = useState<Thought[]>();

    const getList = async () => {
        const thoughtList = await getDataWithJsonAsync<Thought[]>("/api/index");

        if (thoughtList) {
            setThoughts(thoughtList);
        } else {

        }
    };

    useLayoutEffect(() => {
        getList();
    }, []);

    return (
        <>
            <Typography variant="h3" gutterBottom>
                Thought List
            </Typography>
            {thoughts ? (
                <>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell>日時</TableCell>
                                    <TableCell>状況</TableCell>
                                    <TableCell>気分</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell>自動思考</TableCell>
                                    <TableCell>根拠</TableCell>
                                    <TableCell>反証</TableCell>
                                    <TableCell>適応的思考</TableCell>
                                    <TableCell>今の気分</TableCell>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {thoughts.map((t, index) => (
                                    <TableRow key={index} hover>
                                        <TableCell>{t.id}</TableCell>
                                        <TableCell>
                                            {t.thoughtDateTime
                                                ? formatDateTime(t.thoughtDateTime, "-")
                                                : ""}
                                        </TableCell>
                                        <TableCell>{t.situation}</TableCell>
                                        <TableCell>{t.feeling}</TableCell>
                                        <TableCell>{t.percent}</TableCell>
                                        <TableCell>{t.automaticThinking}</TableCell>
                                        <TableCell>{t.base}</TableCell>
                                        <TableCell>{t.objection}</TableCell>
                                        <TableCell>{t.newThinking}</TableCell>
                                        <TableCell>{t.newFeeling}</TableCell>
                                        <TableCell>{t.newPercent}</TableCell>
                                        <TableCell>
                                            <Button variant="outlined"
                                                onClick={() => navigate(`detail/${t.id}`)}>
                                                編集
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            ) : (
                <div>Loading ...</div>
            )}
        </>
    );
};
