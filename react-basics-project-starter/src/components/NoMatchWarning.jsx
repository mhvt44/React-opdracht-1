import { Alert, AlertDescription } from "@chakra-ui/react";

export const NoMatchWarning = () => {
  return (
    <Alert
      status={"warning"}
      variant={"subtle"}
      alignItems={"center"}
      maxW="2xl"
      justifyContent="center"
    >
      <AlertDescription>
        {" Sorry, but we could not find the recipe(s) you were looking for."}
      </AlertDescription>
    </Alert>
  );
};
