import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
// This Layout component wraps the main content of the application with a Header and Footer.
// It can be used in the main App component to ensure consistent layout across all pages.