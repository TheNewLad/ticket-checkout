import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Stepper, Step, StepLabel, Button } from "@mui/material";

const steps = ["Find A Show", "Purchase Tickets", "Checkout", "Enjoy"];

const getStepContent = (step: number) => {
  switch (step) {
    case 0:
      return "Find A show";
    case 1:
      return "Purchase tickets";

    case 2:
      return "Checkout";
    case 3:
      return "Enjoy";
    default:
      throw new Error("Unknown step");
  }
};

export default function App() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography
          component="h1"
          variant="h2"
          sx={{ marginTop: 4, marginBottom: 1, fontWeight: "bold" }}
        >
          Ticket Checkout
        </Typography>
        <Stepper
          activeStep={activeStep}
          sx={{ paddingTop: 3, paddingBottom: 5 }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        <Container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: 8,
            marginBottom: 3,
          }}
          maxWidth="sm"
        >
          <Button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            onClick={() => setActiveStep((prev) => prev + 1)}
            disabled={activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Container>
        <Box sx={{ marginTop: 8, marginBottom: 3 }}>
          <Typography variant="body1">
            This is a ticket checkout app built with React and Material UI.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
