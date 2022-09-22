import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import "./styles/autocomplete.scss";

const AutocompleteComponent = () => {
  const top100Films = [
    { label: "Halong Bay", year: 1994 },
    { label: "Ho Chi Minh City", year: 1972 },
    { label: "Hue", year: 1974 },
    { label: "Phong Nha-Ke Bang National Park", year: 2008 },
    { label: "My Son", year: 1957 },
    { label: "Hoi An", year: 1993 },
    { label: "Sapa Countryside", year: 1994 },
    {
      label: "Mekong Delta",
      year: 2003,
    },
    { label: "Cat Ba Island", year: 1999 },
    { label: "Nha Trang", year: 1966 },
    { label: " Cu Chi Tunnels", year: 1999 },
    {
      label: "Ba Be National Park",
      year: 2001,
    },
  ];
  return (
    <div className="auto_field">
      <div>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Chose tour..." />
          )}
        />
      </div>
      <div>
        <TextField id="outlined-basic" label="Looking for" variant="outlined" />
      </div>
      <button className="find_tour">Find Tour</button>
    </div>
  );
};

export default AutocompleteComponent;
