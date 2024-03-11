// import '@styles/globals.css';

import Nav from "../components/Nav";



// import Nav from '@components/Nav';
// import Footer from '@components/Footer';
export const metadat = {
    title: "Omotola's Blog",
    description: "a blog about business, tech, and life",
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
                {/* <Footer /> */}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;