import React, { useState, useCallback } from "react";
import Button from "../../Components/Button";
import Count from "../../Components/Count";
import Title from "../../Components/Title";

export const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 10);
  }, [salary]);
  return (
    <>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </>
  );
};
