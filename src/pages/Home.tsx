import React from "react";

import Container from "../components/Container";
import Text from "../components/Text";

function Home() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Container
          height="640"
          style={{ flexDirection: "row", paddingLeft: "10%" }}
        >
          <div
            style={{
              margin: "auto 0",
            }}
          >
            <Text
              tag="h1"
              style={{ fontWeight: 900, fontSize: "50px", lineHeight: "54px" }}
            >
              Transform Books, <br /> Reform Education
            </Text>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
