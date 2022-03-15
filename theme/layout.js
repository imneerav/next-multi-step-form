import Head from 'next/head'
import {
  Generic,
  Container,
  Content,
  Footer,
} from 'rbx'
import {AppConfig} from '../AppConfig'

const Layout = ({ children }) => {
    return (
        <div className='head'>
            <Head>
                <meta charSet="utf-8"/>
                <title>Welcome to our site - {new Date().getFullYear()}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"/>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <meta name="robots" content="index,follow,all"/>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/fontawesome.min.css" integrity="sha512-P9vJUXK+LyvAzj8otTOKzdfF1F3UYVl13+F8Fof8/2QNb8Twd6Vb+VD52I7+87tex9UXxnzPgWA3rH96RExA7A==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossOrigin="anonymous"></script>
            </Head>
            <Generic>
                <Container className="pt-6" style={{maxWidth: 100 + '%'}} >
                    <div className="columns is-mobile has-background-primary mr-0">
                        <div className="column title has-text-centered has-text-white is-uppercase">Next Multi Step Form Demo</div>
                    </div>
                    <Content>
                        <section className="section">
                            <div className="rw-container container">
                                {children}
                            </div>
                        </section>
                    </Content>
                    <p>&nbsp;</p>
                </Container>
                <Footer>
                    <Content textAlign="centered">
                    <p>&copy; {AppConfig.Title}, Inc. All rights reserved.</p>
                    </Content>
                </Footer>
            </Generic>
        </div>
  )
}

export default Layout