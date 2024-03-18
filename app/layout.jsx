import "../styles/globals.css";

import Nav from "../components/Nav";

import Footer from "../components/Footer";


// export const metadata = {
//   title: "Omotola's Blog",
//   description: "a blog about business, tech, and life",
// };

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
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
      </body>
    </html>
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
