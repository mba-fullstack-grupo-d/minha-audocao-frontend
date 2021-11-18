import Banner from '../../components/Banner'
import Carrousel from '../../components/Carrousel'
import Info from '../../components/Info'
import Footer from '../../components/Footer';

export default function Home() {

	return (
		<>
			<Banner />
			<Carrousel title="Pets Disponíveis"/>
			<Carrousel title="Próximos Eventos"/>
			<Info />
			<Footer />

		</>
	);
}

