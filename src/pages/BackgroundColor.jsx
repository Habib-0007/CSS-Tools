import styles from "../styles/BackgroundColor.module.css";
import { useState } from "react";

const BackgroundColor = () => {
	const [bgColor, setBgColor] =
		useState("#0076ff");
	return (
		<section className={styles.grid}>
			<section
				className={styles.subgrid}
			>
				<section
					className={
						styles.background_area
					}
				>
					<h1>Background-Color</h1>
					<section
						className={styles.code_box}
					>
						<strong>Code</strong>
						<div class={styles.code}>
							<p>
								<span
									style={{
										color: "#F92672",
									}}
								>
									background-color
								</span>
								:{" "}
								<span
									style={{
										color: "#e6db74",
									}}
								>
									{bgColor}
								</span>
								;
							</p>
						</div>
					</section>
					<section
						className={
							styles.bg_preview
						}
					>
						<strong>Preview</strong>
						<div
							className={styles.bg}
							style={{
								background: `${bgColor}`,
							}}
						></div>
					</section>
				</section>
			</section>
		</section>
	);
};

export default BackgroundColor;
