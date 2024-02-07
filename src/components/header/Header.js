import "./style.css";

const Header = () => {
    return (
		<header className="header">
			<div className="header__wrapper">
				<h1 className="header__title">
					<strong>
					Привет! Меня зовут <em>Мария Марчук</em>
					</strong>
					<br />и я backend разработчик
				</h1>
				<div className="header__text">
					<p>с желанием учиться и творить)</p>
				</div>
				<a href="https://drive.google.com/file/d/1CoyovzZ5_X09XLzgiVmnUGlcHSdip3Ra/view?usp=sharing" className="btn">
					Мое резюме
				</a>
			</div>
		</header>
	);
}

export default Header;