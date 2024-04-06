import styles from "../styles/Home.module.css";
import ToolsList from "../components/ToolsList";

const Header = () => {
	return (
		<header className={styles.header}>
			<section
				className={styles.subhead}
			>
				<section>
					<h1>CSS Tools</h1>
					<nav>
						<a href="/">
							<i className="fab fa-github"></i>
						</a>
						<a href="/">
							<i className="fab fa-twitter"></i>
						</a>
					</nav>
				</section>
			</section>
		</header>
	);
};

const HomeBody = () => {
	const data = ToolsList();
	return (
		<section className={styles.grid}>
			<section
				className={styles.subgrid}
			>
				{data?.map(value => (
					<section
						className={styles.homebody}
					>
						<strong>
							{value.title}
						</strong>
						<div
							className={
								styles.buttonsList
							}
						>
							{value.content?.map(
								val => (
									<a href={`/${val}`}>
										{val}
									</a>
								)
							)}
						</div>
					</section>
				))}
			</section>
		</section>
	);
};

const Home = () => {
	return (
		<section>
			<Header />
			<HomeBody />
		</section>
	);
};

export default Home;
