import Sidebar from './Sidebar';
import Menu from './Menu';
import Header from './Header';

function Layout(props) {
    return (
        <>
            <Header />

            <section >
                <div className="container">
                    <div className="row">
                        <Sidebar />

                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9 ">
                            <div className="front-side mt-5 pb-5">
                                <Menu />

                                <div className="main-content">
                                    {props.children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Layout;