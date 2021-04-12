import Link from 'next/link';

function HeaderNav() {
	return (
		<div className='site-header__nav primary-nav'>
			<ul>
				<li>
					<Link className='primary-nav--active' href='/'>
						Anasayfa
					</Link>
				</li>
				<li className='primary-nav__dropdown'>
					<Link href='/hakkimizda'>Hakkımızda</Link>
					<div class='primary-nav__dropdown-content'>
						<a href='#'>Misyon & Vizyon</a>
						<a href='#'>Kalite Politikası</a>
					</div>
				</li>
				<li>
					<Link href='/hizmetlerimiz'>Hizmetlerimiz</Link>
				</li>
				<li className='primary-nav__dropdown'>
					<Link href='/urunlerimiz'>Ürünlerimiz</Link>
					<div class='primary-nav__dropdown-content'>
						<a href='#'>Kapı</a>
						<a href='#'>Mutfak</a>
						<a href='#'>Dolap</a>
						<a href='#'>Çardak</a>
					</div>
				</li>
				<li>
					<Link href='/referanslar'>Referanslar</Link>
				</li>
				<li>
					<Link href='/bize-ulasin'>Bize Ulaşın</Link>
				</li>
			</ul>
		</div>
	);
}

export default HeaderNav;
