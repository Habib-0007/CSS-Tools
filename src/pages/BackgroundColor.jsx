import styles from "../styles/BackgroundColor.module.css";
import {
	useState,
	useRef,
} from "react";
import copyText from "../components/copyText";

const BackgroundColor = () => {
	const [red, setRed] = useState("24");
	const [green, setGreen] =
		useState("24");
	const [blue, setBlue] =
		useState("24");
	const [alpha, setAlpha] =
		useState("0.78");
	const [isCopied, setIsCopied] =
		useState(false);
	var bgColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
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
					<h1>Background Color</h1>
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
						className={styles.sliders}
					>
						<strong>Controls</strong>
						<div>
							<label>R (0 - 255)</label>
							<input
								type="range"
								min="0"
								max="255"
								value={red}
								onInput={event => {
									setRed(
										event.target.value
									);
								}}
								step="1"
							/>
						</div>
						<div>
							<label>G (0 - 255)</label>
							<input
								type="range"
								min="0"
								max="255"
								value={green}
								onInput={event => {
									setGreen(
										event.target.value
									);
								}}
								step="1"
							/>
						</div>
						<div>
							<label>B (0-255)</label>
							<input
								type="range"
								min="0"
								max="255"
								value={blue}
								onInput={event => {
									setBlue(
										event.target.value
									);
								}}
								step="1"
							/>
						</div>
						<div>
							<label>A (0 - 1)</label>
							<input
								type="range"
								min="0"
								max="1"
								value={alpha}
								onInput={event => {
									setAlpha(
										event.target.value
									);
								}}
								step="0.01"
							/>
						</div>
					</section>
				</section>
			</section>
		</section>
	);
};

export default BackgroundColor;
