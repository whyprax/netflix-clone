import React from "react";
import Jumbotron from "./components/jumbotron/index";
import jumboData from "./fixtures/jumbo.json";

export default function App() {
  return (
    <>
      <Jumbotron.Container>
        {jumboData.map((item) => (
          <Jumbotron key={item.id} direction={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
              <Jumbotron.Image src={item.image} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        ))}
      </Jumbotron.Container>
    </>
  );
}
