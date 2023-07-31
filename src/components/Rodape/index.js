import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="facebook.com" target="_blank">
                        <img src="/images/fb.png" alt="Logo do Facebook" />
                    </a>
                </li>
                <li>
                    <a href="twitter.com" target="_blank">
                        <img src="/images/tw.png" alt="Logo do Twitter" />
                    </a>
                </li>
                <li>
                    <a href="instagram.com" target="_blank">
                        <img src="/images/ig.png" alt="Logo do Instagram" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/images/logo.png" alt="Logo do Organo" />
        </section>
        <section>
            <h4>
                Desenvolvido por Vinicius Crispim.
            </h4>
        </section>
    </footer>)
}

export default Rodape