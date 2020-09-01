import React from "react"
import Button from "ui/Button.js";

const ButtonColor = () => (
  <>
  <Button text="Default" />
  <Button color="primary" text="Primary" className="ml-1" />
  <Button color="blue" text="Blue" className="ml-1" />
  <Button color="dark" text="Dark" className="ml-1" />
  </>
)


export default ButtonColor

