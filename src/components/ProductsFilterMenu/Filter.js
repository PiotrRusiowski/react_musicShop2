import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Filter = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">Nazwa</MenuItem>
        <MenuItem value={10}>Cena</MenuItem>
        <MenuItem value={20}>Reset</MenuItem>
      </Select>
    </FormControl>
  );
};
export default Filter;
