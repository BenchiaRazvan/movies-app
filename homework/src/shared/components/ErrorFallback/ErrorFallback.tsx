import { Typography } from "@mui/material";

export const ErrorFallback = ({ error }: any) => {
  return (
    <div role="alert">
      <Typography>Something went wrong, try again later:</Typography>
      <pre>{error.message}</pre>
    </div>
  );
};
