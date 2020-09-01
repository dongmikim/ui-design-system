import React from "react"
import Button from "ui/Button.js";

const ButtonSizes = () => (
  <>
  <Button size="xs" text="Xsmall" />
  <Button size="sm" text="Small" className="ml-1" />
  <Button text="Medium" className="ml-1" />
  <Button size="lg" text="Large" className="ml-1" />
  <Button width="sm" text="MinWidth Small" className="ml-1" />
  <Button width="md" text="MinWidth Medium" className="ml-1" />
  <Button width="lg" text="MinWidth Large" className="ml-1" />
  </>
)


export default ButtonSizes

