import React from "react";
import { Result, Button } from "antd";
const NotFound = () => {
  return (
    <div>
      <Result
        status="404"
        title="404 Error"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button href="/" type="primary">
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
