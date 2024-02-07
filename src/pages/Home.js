import Header from './../components/header/Header'

const Home = () => {
	return (
		<>
			<Header />
			<main className="section">
				<div className="container">
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">Back-end</h2>
							<p>
								<li>Знания C# на хорошем уровне</li>
								<li>Работала с WinForm и WPF, имею опыт веб разработки с помощью C#</li>
								<li>Понимаю что такое ООП и использую в своем коде</li>
								<li>Работала с БД: MS SQL, MySQL и PostgresSQL</li>
								<li>Знаю SQL на уровне достаточном, для написания запросов средней сложности</li>
								<li>Могу работать с Git и Github/GitLab</li>
							</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Front-end</h2>
							<p>Знаю основы: JavaScript/HTML/CSS/React</p>
						</li>
						<li className="content-list__item">
							<h2 className="title-2">Soft Skills</h2>
							<p>
								<li>Умею решать задачи самостоятельно</li>
								<li>Но знаю когда надо задавать вопросы</li>
								<li>Люблю видеть результаты своего труда</li>
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
}

export default Home;