import React, { useState } from "react";
import { MyFunctions } from "../Store/store.js";
import "./Styles/header.css";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Header = () => {
  const [selectedValue, setSelectedValue] = useState("pokemon");
  const myCtx = MyFunctions();
  const navigate = useNavigate();
  function getValue(e) {
    myCtx.setPage((prev) => (prev = 0));
    if (e.target.value === "pokemon") {
      myCtx.setPokBoolean(true);
    } else {
      myCtx.setPokBoolean(false);
    }
    myCtx.setApiEndpoint(e.target.value);
    setSelectedValue(e.target.value);
    navigate("/");
  }
  return (
    <>
      <header className="header">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Select One</InputLabel>
            <Select
              id="demo-simple-select"
              value={selectedValue}
              label="Pokemon"
              onChange={getValue}
            >
              <MenuItem value={"pokemon"}>Pokemon</MenuItem>
              <MenuItem value={"ability"}>Abilities</MenuItem>
              <MenuItem value={"type"}>Types</MenuItem>
              <MenuItem value={"move"}>Move</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </header>
    </>
  );
};

export default Header;
