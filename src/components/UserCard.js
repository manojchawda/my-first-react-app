import React from "react";
import { Card, Button } from "antd";

function UserCard(props) {
  return (
    <Card
      title={props.name}
      style={{ width: 300 }}
    >
      <p>{props.email}</p>

      <Button type="primary">
        View Profile
      </Button>
    </Card>
  );
}

export default UserCard;