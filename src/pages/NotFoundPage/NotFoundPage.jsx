import React from "react";
import { FormattedMessage } from "react-intl";

export const NotFoundPage = () => (
  <div>
    <FormattedMessage
      id={"page.notFound"}
      defaultMessage={"This page does not exist."}
    />
  </div>
)