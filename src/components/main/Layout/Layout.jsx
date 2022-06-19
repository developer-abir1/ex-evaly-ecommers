import React  from 'react';
import Footer from '../../share/footer/Footer';
import Navbar from '../../share/navbar/Navbar';

const Layout = ({children}) => {
    
    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main></main>
            <footer><Footer/></footer>
        </div>
    );
};

export default Layout;