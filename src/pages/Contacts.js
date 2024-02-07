const Contacts = () => {
    return (
		<main className="section">
			<div className="container">
				<h1 className="title-1">Как со мной связаться?</h1>

				<ul className="content-list">
					<li className="content-list__item">
						<h2 className="title-2">Город</h2>
						<p>Москва, м. Курская</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Telegram</h2>
						<p>
							<a href="https://t.me/marchukmm">@marchukmm</a>
						</p>
					</li>
					<li className="content-list__item">
						<h2 className="title-2">Email</h2>
						<p>
							<a href="mailto:marussia01@gmail.com">
							marussia01@gmail.com
							</a>
						</p>
					</li>
				</ul>
			</div>
		</main>
	);
}

export default Contacts;