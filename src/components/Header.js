import logos from '../assets/logo.png';
import "./Header.css";
export function Header() {
    return (
        <header>
            <img src={logos}></img>
            <a href='/'>Home</a>
        </header>
    )
}
