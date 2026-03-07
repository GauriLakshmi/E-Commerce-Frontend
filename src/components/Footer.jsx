import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      &copy; {new Date().getFullYear()} E-Commerce Platform. All rights reserved.
    </footer>
  );
};

export default Footer;