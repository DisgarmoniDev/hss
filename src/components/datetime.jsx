import React, { useState } from 'react';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

export default function DateAndTimePickers() {
  const [value, setValue] =useState(dayjs());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  
  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
      <DateTimePicker 
        label="Выбирите дату бронирования"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}