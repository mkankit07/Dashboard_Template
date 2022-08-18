import React from "react";
import Box from "@mui/material/Box";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const Menu = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Search className="border">
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Item One" value="1" />
              <Tab label="Item Two" value="2" />
              <Tab label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box className="row">
              <div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div>
              <div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div><div className="col-md-3 mb-2">
                <div class="card h-100 text-center ">
                  <img class="card-img-top" style={{ height: "250px" }} />
                  <div class="card-body"></div>
                </div>
              </div>
            </Box>
          </TabPanel>
          <TabPanel value="2">Item Two</TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default Menu;
