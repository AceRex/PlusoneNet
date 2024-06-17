import Row from "../../Components/row";
import Card from "./Components/Card";
import Header from "./Header";
import Img from "../../images/watch1.jpg";
import Img2 from "../../images/watch2.jpg";

function AdminPortal() {
  return (
    <>
      <Header />
      <Row>
        <Card image={Img} title="Smart Watch" category="watch" amount={4000.90} />
        <Card image={Img2} title="Smart Watch" category="watch" amount={4000.90} />
        <Card image={Img} title="Smart Watch" category="watch" amount={4000.90} />
        <Card image={Img2} title="Smart Watch" category="watch" amount={4000.90} />
        <Card image={Img} title="Smart Watch" category="watch" amount={4000.90} />
      </Row>
    </>
  );
}
export default AdminPortal;
