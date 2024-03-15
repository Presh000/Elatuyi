import "../styles/globals.css";

import Nav from "../components/Nav";

import Footer from "../components/Footer";

// import Nav from '@components/Nav';
// export const metadata = {
//   title: "Omotola's Blog",
//   description: "a blog about business, tech, and life",
// };

const RootLayout = ({ children }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div className="main"></div>
      <main
        className="app"
        style={{ flex: 1, display: "flex", flexDirection: "column" }}
      >
      <Nav />
        {children}
      <Footer />
      </main>
    </div>
  );
};

export default RootLayout;

// <html lang="en">
//   <body>
//     <div className="main">
//       <div className="gradient" />
//     </div>
//     <main className="app">
//       <Nav />
//       {/* {children} */}
//       {/* <div className="items-end"> */}
//         <Footer />
//       {/* </div> */}
//     </main>
//   </body>
// </html>
