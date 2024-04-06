import styles from "../styles/Home.module.css";
import ToolsList from "../components/ToolsList";
import { Link } from "react-router-dom";

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
									<Link to={`/${val}`}>
										{val}
									</Link>
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
			<HomeBody />
		</section>
	);
};

export default Home;
