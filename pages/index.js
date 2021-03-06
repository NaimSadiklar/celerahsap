import BoxItem from '../Components/home-box-item';

function Home() {
	return (
		<div className='wrapper homepage'>
			<div className='homepage--wrapper'>
				<div className='row__medium-4'>
					<BoxItem
						text='Kuruluşumuzdan günümüze kadar Çeler Ahşap ve Dekorasyon hakkında herşey...'
						imageL="/images/hakkimizda-ornek.jpg"
						link='/hakkimizda'
						image='/images/hakkimizda.jpg'
						imageW='183'
						imageH='39'
					/>
				</div>
				<div className='row__medium-4'>
					{' '}
					<BoxItem
						text='Kuruluşumuzdan günümüze kadar Çeler Ahşap ve Dekorasyon hakkında herşey...'
						imageL="/images/tasarimlerimiz-ornek.jpg"
						link='/referanslar'
						image='/images/tasarimlarimiz.jpg'
						imageW='264'
						imageH='39'
					/>
				</div>
				<div className='row__medium-4'>
					{' '}
					<BoxItem
						text='Kuruluşumuzdan günümüze kadar Çeler Ahşap ve Dekorasyon hakkında herşey...'
						imageL="/images/urunlerimiz-ornek.jpg"
						link='/urunlerimiz'
						image='/images/urunlerimiz.jpg'
						imageW='230'
						imageH='41'
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
