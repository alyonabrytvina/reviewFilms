import React from "react";
import { FormattedMessage } from "react-intl";

export const Homepage = () => (
  <div>
    <FormattedMessage
      id={"homepage.greeting"}
      defaultMessage={"Welcome to films collection!"}
    />
  </div>
)