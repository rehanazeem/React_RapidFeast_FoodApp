import logoImg from "../assets/logo.jpg";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restarant " />
        <h1>RapidFeast</h1>
      </div>
      <nav>
        <button>Cart (0)</button>
      </nav>
    </header>
  );
};

export default Header;
