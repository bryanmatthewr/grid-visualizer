import React, { useCallback, useState } from "react";
import { Box, Stack, TextField, Button, FormHelperText } from "@mui/material";
import { parsePosition } from "../../utils/helpers/Grid/gridHelper";

export default function GridPositionForm({
    defaultValue = "0,0 NORTH",
    onSubmit,
}) {
    const [inputValue, setInputValue] = useState(defaultValue);

    // Initialize errors state based on default value
    const [errors, setErrors] = useState(parsePosition(defaultValue).errors);

    // Initialize with default value and call onSubmit
    React.useLayoutEffect(() => {
        const { parsed } = parsePosition(defaultValue);
        if (parsed) {
            onSubmit(parsed);
        }
    }, [defaultValue, onSubmit]);

    const handleSubmit = useCallback(() => {
        const trimmed = inputValue.trim();
        const { parsed, errors } = parsePosition(trimmed);
        setErrors(errors);
        if (parsed) {
            onSubmit(parsed);
        }
    }, [inputValue, onSubmit]);

    return (
        <Box sx={{ mb: 4 }}>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="center"
                alignItems="flex-start"
            >
                <Box sx={{ width: 360 }}>
                    <TextField
                        label="Enter Position and Direction (X,Y Direction)"
                        variant="outlined"
                        size="small"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
                        error={errors.length > 0}
                        sx={{ width: 360 }}
                    />
                    <FormHelperText
                        sx={{
                            minHeight: "3.8em",
                            color: errors.length > 0 ? "error.main" : "transparent",
                            fontSize: "0.75rem",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            whiteSpace: "pre-line",
                            wordBreak: "break-word",
                        }}
                    >
                        {errors.length > 0 && (
                            <ul style={{ margin: 0, paddingLeft: 18, width: "100%" }}>
                                {errors.map((err, idx) => (
                                    <li
                                        key={idx}
                                        style={{
                                            width: "100%",
                                            wordBreak: "break-word",
                                            marginBottom: 4,
                                        }}
                                    >
                                        {err}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </FormHelperText>
                </Box>

                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ height: "40px" }}
                >
                    Visualize
                </Button>
            </Stack>
        </Box>
    );
}
