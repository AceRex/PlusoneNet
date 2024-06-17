import Button from "./button";

function Header() {
  return (
    <header className="relative z-50 h-[10vh] flex place-content-center">
      <div className="w-[100vw] lg:w-[70vw] xl:w-[60vw] m-auto mt-3 fixed flex items-center shadow-md bg-primary1 p-4 rounded-lg">
        <div className="w-1/2">
          <p className="font-bold tracking-wide text-white text-lg uppercase">
            Ecommerce
          </p>
        </div>
        <div className="w-1/2 flex place-content-end">
          <div className="w-1/2 flex flex-row items-end gap-4">
            <Button text={"Log in"} type="outline" variant="white" />
            <Button text={"Sign up"} type="fill" variant="white" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
