import ListGroup from './components/ListGroup';
import Nav from './components/site includes/Nav';
import Footer from './components/site includes/Footer';
import Content from './components/Content';

function App() {
    return (
        <>
        <Nav/>
        <main className='container-xl mt-5 mb-5'>
            <h1>Aplikace random faktů koček :)</h1>
            <Content/>
        </main>
        <Footer/>
        </>
    )
}

export default App;