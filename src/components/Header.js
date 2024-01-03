import logos from '../assets/logo.png';

export function Header() {
    return (
        <header>
            <img src={logos}></img>
            <a href='/'>Home</a>
        </header>
    )
}
