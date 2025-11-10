import { Box } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { getRotation } from "../../utils/Grid/gridUtils";

export default function GridObject({ direction = "NORTH", icon: Icon = ArrowUpwardIcon }) {
    const rotation = getRotation(direction);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                transform: `rotate(${rotation}deg)`,
                color: "primary.main",
            }}
        >
            <Icon sx={{ width: "60px", height: "60px" }} />
        </Box>
    );
}
