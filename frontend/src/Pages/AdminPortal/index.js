import Row from "../../Components/row";
import Card from "./Components/Card";
import Header from "./Header";
import Img from "../../images/watch1.jpg";
import Img2 from "../../images/watch2.jpg";
import Preview from "./Preview";
import { useSelector } from "react-redux";

function AdminPortal() {
  const openAdminPreview = useSelector(
    (state) => state.others.openAdminPreview
  );
  return (
    <div className="relative">
      <Header />
      <Row>
        <Card
          image={Img}
          title="Smart Watch"
          category="watch"
          amount={4000.9}
        />
        <Card
          image={Img2}
          title="Smart Watch"
          category="watch"
          amount={15000}
        />
        <Card
          image={Img}
          title="Smart Watch"
          category="watch"
          amount={7000000}
        />
        <Card
          image={Img2}
          title="Smart Watch"
          category="watch"
          amount={35000}
        />
        <Card
          image={Img}
          title="Smart Watch"
          category="watch"
          amount={999.99}
        />
        <Card
          image={Img}
          title="Smart Watch"
          category="watch"
          amount={999.99}
        />
      </Row>
      {openAdminPreview && <Preview amount={100000} />}
    </div>
  );
}
export default AdminPortal;
