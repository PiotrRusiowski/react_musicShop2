import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import MenuItem from "@material-ui/core/MenuItem";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import RootContext from "../../context/context";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 100,
    margin: 0,
    padding: 2,
    background: "white",
    "@media(max-width: 425px)": {
      marginRight: 25,
      marginLeft: 25,
      marginTop: 5,
      width: 230,
    },
  },
}));

const CategoryFilter = () => {
  const context = useContext(RootContext);

  const { categoryValue, filterMenager } = context;
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={categoryValue}
        onChange={filterMenager}
        name="categoryInput"
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value={"all"}>category: all</MenuItem>
        <MenuItem value={"mixer"}>mixer</MenuItem>
        <MenuItem value={"console"}>console</MenuItem>
        <MenuItem value={"headphones"}>headphones</MenuItem>
        <MenuItem value={"microphone"}>microphone</MenuItem>
        <MenuItem value={"cable"}>cable</MenuItem>
      </Select>
    </FormControl>
  );
};
export default CategoryFilter;
