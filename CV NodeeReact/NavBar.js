import{Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
return (
   <nav class = {styles.navbar}>
    <Container>
        <u1>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/sobre">Sobre</Link>
            </li>
            <li>
                <Link to = "/contato">Contato</Link>
            </li>
        </u1>
    </Container>
   </nav>
)
}