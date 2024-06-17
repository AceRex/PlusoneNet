import Header from "../../Components/header";
import Row from "../../Components/row";
import Itemcard from "../../Components/itemcard";
import Image1 from "../../images/watch1.jpg";
import Image2 from "../../images/watch2.jpg";

function Main() {
  return (
    <>
      <Header />
      <Row>
        <Itemcard
          title={"Smart watch pro 1"}
          category="Watch"
          image={Image1}
          amount={300000}
        />
        <Itemcard title={"Smart watch pro 2"} category="food" image={Image2} />
        <Itemcard title={"Smart watch pro 1"} category="Watch" image={Image1} />
        <Itemcard title={"Smart watch pro 2"} category="Watch" image={Image2} />
        <Itemcard title={"Smart watch pro 1"} category="Watch" image={Image1} />
        <Itemcard title={"Smart watch pro 2"} category="Watch" image={Image2} />
      </Row>
    </>
  );
}
export default Main;
