import logo from '../assets/removed.png';
export default function Header() {

    return (
        <header className="header">
            <div className="logo"><img src={logo} alt="OkuTokeka Logo" className='logoimg' /></div>
            <div className="navigation">
                <ol className="nav-list">
          
                </ol>
            </div>
            <div className="get-started">
                <button className="btn-thrid">Secret Acess</button>
            </div>
        </header>
    )}