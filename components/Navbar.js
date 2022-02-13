import Link from "next/link";
const Navbar = () => {
  return (
    <div className="nav">
      <Link href="/">
        <div className="logo"></div>
      </Link>
    </div>
  );
};

export default Navbar;
