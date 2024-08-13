import React, { useState } from "react";
import { Box, TextField, Button, Snackbar, Alert } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createReservation } from "../api";

const ReservationForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dateTime: null,
    numberOfPeople: "",
  });

  const [notification, setNotification] = useState({
    open: false,
    message: "",
    severity: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateTimeChange = (newDateTime) => {
    setForm({
      ...form,
      dateTime: newDateTime,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await createReservation({
        ...form,
        dateTime: form.dateTime ? form.dateTime.toISOString() : null,
      });

      if (result && result.message) {
        setNotification({
          open: true,
          message: result.message,
          severity: "success",
        });
      } else {
        setNotification({
          open: true,
          message: "An unexpected error occurred.",
          severity: "error",
        });
      }
    } catch (error) {
      setNotification({
        open: true,
        message: error.message || "An unexpected error occurred.",
        severity: "error",
      });
    }
  };

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.dark",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.dark",
              },
            },
            "& .MuiInputLabel-root": {
              color: "primary.dark",
            },
          }}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.dark",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.dark",
              },
            },
            "& .MuiInputLabel-root": {
              color: "primary.dark",
            },
          }}
        />
        <TextField
          label="Phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.dark",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.dark",
              },
            },
            "& .MuiInputLabel-root": {
              color: "primary.dark",
            },
          }}
        />
        <DateTimePicker
          label="Reservation Date & Time"
          value={form.dateTime}
          onChange={handleDateTimeChange}
          renderInput={(props) => (
            <TextField {...props} fullWidth margin="normal" required />
          )}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.dark",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.dark",
              },
            },
            "& .MuiInputLabel-root": {
              color: "primary.dark",
            },
          }}
        />
        <TextField
          label="Number of People"
          name="numberOfPeople"
          type="number"
          value={form.numberOfPeople}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "primary.main",
              },
              "&:hover fieldset": {
                borderColor: "primary.dark",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.dark",
              },
            },
            "& .MuiInputLabel-root": {
              color: "primary.dark",
            },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Submit
        </Button>
        <Snackbar
          open={notification.open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={notification.severity}>
            {notification.message}
          </Alert>
        </Snackbar>
      </Box>
    </LocalizationProvider>
  );
};

export default ReservationForm;
