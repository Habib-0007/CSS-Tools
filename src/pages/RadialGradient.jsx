import styles from "../styles/Gradient.module.css";
import {
	useState,
	useRef,
} from "react";
import copyText from "../components/copyText";

const RadialGradient = () => {
	const [colorOne, setColorOne] =
		useState("#fff");
	const [
		colorOnePercent,
		setColorOnePercent,
	] = useState("30");
	const [colorTwo, setColorTwo] =
		useState("#000");
	const [
		colorTwoPercent,
		setColorTwoPercent,
	] = useState("20");
	const [isCopied, setIsCopied] =
		useState(false);
	var bgColor = `radial-gradient(${colorOne} ${colorOnePercent}%,
	${colorTwo} ${colorTwoPercent}%)`;
	var code = useRef(null);
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
					<h1>Radial Gradient</h1>
					<section
						className={styles.code_box}
					>
						<strong>Code</strong>
						<div
							ref={code}
							class={styles.code}
						>
							<p>
								<span
									style={{
										color: "#F92672",
									}}
								>
									background
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
						<button
							onClick={() => {
								if (isCopied == false) {
									copyText(
										code.current
											.textContent
									);
								}
								setIsCopied(!isCopied);
							}}
						>
							{!isCopied
								? "Copy"
								: "Copied"}
						</button>
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
					<section
						className={styles.controls}
					>
						<strong>Controls</strong>
						<div>
							<input
								type="text"
								placeholder="Color One"
								value={colorOne}
								onChange={event => {
									setColorOne(
										event.target.value
									);
								}}
							/>
							<input
								type="number"
								placeholder="%"
								value={colorOnePercent}
								onChange={event => {
									setColorOnePercent(
										event.target.value
									);
								}}
							/>
						</div>
						<div>
							<input
								type="text"
								placeholder="Color Two"
								value={colorTwo}
								onChange={event => {
									setColorTwo(
										event.target.value
									);
								}}
							/>
							<input
								type="number"
								placeholder="%"
								value={colorTwoPercent}
								onChange={event => {
									setColorTwoPercent(
										event.target.value
									);
								}}
							/>
						</div>
					</section>
				</section>
			</section>
		</section>
	);
};

export default RadialGradient;
