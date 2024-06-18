import Button from "../../Components/button";

function Header() {
  return (
    <header className="p-4 relative z-50 h-[10vh] flex place-content-center">
      <div className="bg-primary1 flex justify-between fixed shadow-xl font-bold text-xl w-[50vw] m-auto rounded-lg p-4 text-white text-center">
        <p>Ecommerce Admin Portal</p>
        <div><Button type={"outline"} text="Create product" /></div>
      </div>
    </header>
  );
}
export default Header;
