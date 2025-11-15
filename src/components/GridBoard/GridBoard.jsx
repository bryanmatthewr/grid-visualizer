import { Table, TableBody, TableCell, TableRow, Box } from "@mui/material";
import GridObject from "../GridObject/GridObject";

export default function GridBoard({ position }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      {
        <Table
          sx={{
            borderCollapse: "collapse",
            width: 400,
            "& .MuiTableCell-root": {
              border: "1px solid #ccc",
              height: 80,
              width: 80,
              textAlign: "center",
              padding: 0,
            },
          }}
        >
          <TableBody>
            {[4, 3, 2, 1, 0].map((row) => (
              <TableRow key={row}>
                {[0, 1, 2, 3, 4].map((col) => (
                  <TableCell key={`${col}-${row}`}>
                    {position && position.x === col && position.y === row && (
                      <GridObject direction={position.direction} />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }
    </Box>
  );
}
