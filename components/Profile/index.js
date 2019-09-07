import React from "react";

// NativeBase Components
import { Card, CardItem, Text, Button } from "native-base";

const Profile = () => {
  return (
    <Card>
      <CardItem>
        <Button
          danger
          onPress={() => alert("You need to implement Logout n00b...")}
        >
          <Text>Logout</Text>
        </Button>
      </CardItem>
    </Card>
  );
};
export default Profile;
