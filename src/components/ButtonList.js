import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Cricket" />
      <Button name="Gaming" />
      <Button name="Sports" />
      <Button name="Cooking" />
      <Button name="Live" />
      <Button name="Songs" />
      <Button name="Soccer" />
      <Button name="Gadgets" />
      <Button name="Football" />
    </div>
  );
};

export default ButtonList;
