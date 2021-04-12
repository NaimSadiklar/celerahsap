import '../styles/styles.scss';
import Footer from '../Components/footer';
import Header from '../Components/header';

function MyApp({ Component, pageProps }) {
	return (
		<div className="wrapper">
			<Header />
		  	<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
