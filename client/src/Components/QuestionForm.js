import {
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

function QuestionForm() {
  const [value, setValue] = useState();

  function handleChange(e) {
    console.log(e.target.value);
  }
  return (
    <div className="mb-12 bg-gray-50 pt-3 pb-5 px-3">
      <h2 className="text-lg text-gray-600 pb-4">
        1. Du gillar att stå i centrum
      </h2>
      <form className="sm:flex justify-between text-sm align-middle">
        <div className="flex sm:flex-col items-center sm:w-1/6 mt-3 mx-4 sm:m-0 text-red-600">
          <input
            type="radio"
            name="first option"
            value="1"
            className="transform scale-200 sm:mt-3 sm:order-last cursor-pointer"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label className="sm:order-first pl-4 sm:p-0">
            Stämmer inte alls
          </label>
        </div>
        <div className="flex sm:flex-col items-center sm:w-1/6 mt-3 mx-4 sm:m-0 text-red-400">
          <input
            type="radio"
            name="first option"
            value="2"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label className="sm:order-first pl-4 sm:p-0">Stämmer ej</label>
        </div>
        <div className="flex sm:flex-col items-center mt-3 mx-4 sm:m-0 sm:w-1/6">
          <input
            type="radio"
            name="first option"
            value="3"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label className="sm:order-first text-gray-600 pl-4 sm:p-0">
            Vet ej
          </label>
        </div>
        <div className="flex sm:flex-col items-center mt-3 mx-4 sm:m-0 sm:w-1/6">
          <input
            type="radio"
            name="first option"
            value="4"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label className="sm:order-first text-green-600 pl-4 sm:p-0">
            Stämmer
          </label>
        </div>
        <div className="flex sm:flex-col items-center mt-3 mx-4 sm:m-0 sm:w-1/6">
          <input
            type="radio"
            name="first option"
            value="5"
            className="transform scale-200 sm:mt-3 cursor-pointer"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <label className="sm:order-first text-green-500 pl-4 sm:p-0">
            Stämmer bra
          </label>
        </div>
      </form>
    </div>
  );
}

export default QuestionForm;
