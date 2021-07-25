import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) =>
  createStyles({
    largeRadioButtonRed: {
      "& svg": {
        width: "2.5em",
        height: "2.5em",
        color: "rgba(245, 0, 0)",
      },
    },
    mediumRadioButtonRed: {
      "& svg": {
        width: "1.5em",
        height: "1.5em",
        color: "rgba(245, 0, 0)",
      },
    },
    largeRadioButtonGreen: {
      "& svg": {
        width: "2.5em",
        height: "2.5em",
        color: "rgba(0, 215, 0)",
      },
    },
    mediumRadioButtonGreen: {
      "& svg": {
        width: "1.5em",
        height: "1.5em",
        color: "rgba(0, 215, 0)",
      },
    },
  })
);

function QuestionForm() {
  const classes = useStyles();
  const [value, setValue] = useState();

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div className="mb-96">
      <div className="w-full h-10 bg-gradient-to-r from-red-400 to-green-400"></div>
      <FormControl
        component="fieldset"
        className="w-full flex justify-center mx-auto"
      >
        <RadioGroup
          className="flex items-center justify-center"
          row
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            labelPlacement="top"
            value="1"
            control={<Radio />}
            className={classes.largeRadioButtonRed}
          />
          <FormControlLabel
            labelPlacement="top"
            value="2"
            control={<Radio />}
            className={classes.mediumRadioButtonRed}
          />
          <FormControlLabel
            className="text-gray-500"
            labelPlacement="top"
            value="3"
            control={<Radio />}
          />
          <FormControlLabel
            labelPlacement="top"
            value="4"
            control={<Radio />}
            className={classes.mediumRadioButtonGreen}
          />
          <FormControlLabel
            labelPlacement="top"
            value="5"
            control={<Radio />}
            className={classes.largeRadioButtonGreen}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default QuestionForm;
