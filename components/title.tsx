"use client";
import { releases } from "@/data/releases";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Title = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

return (
    <div className="flex items-center justify-between">
        <div>
            <h1 className="text-black-100 text-xl lg:text-3xl pl-5 ">{releases[0].title}</h1>
        </div>

        <div className="flex items-center">
            <h2 className="text-black-300 w-24 mr-2 text-sm">Sort by:</h2>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                >
                    <MenuItem value={'All'}>All</MenuItem>
                    <MenuItem value={'Feat'}>Feat</MenuItem>
                    <MenuItem value={'Fix'}>Fix</MenuItem>
                </Select>
            </FormControl>
        </div>
    </div>
);
};

export default Title;
