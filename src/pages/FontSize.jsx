import styles from "../styles/FontSize.module.css";
import {
	useState,
	useRef,
} from "react";
import copyText from "../components/copyText";

const FontSize = () => {
	var code = useRef(null);
	const [fontSize, setFontSize] =
		useState("16");
	const [isCopied, setIsCopied] =
		useState(false);
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
					<h1>Font Size</h1>
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
									font-size
								</span>
								:{" "}
								<span
									style={{
										color: "#e6db74",
									}}
								>
									{fontSize}px
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
						className={styles.font_area}
					>
						<strong>Preview</strong>
						<div
							className={styles.bg}
							style={{
								fontSize: `${fontSize}px`,
							}}
						>
							Hello World!
						</div>
					</section>
					<section
						className={styles.controls}
					>
						<div>
							<strong
								style={{
									paddingBottom: "20px",
								}}
							>
								Font Size: {fontSize}px
							</strong>
							<input
								type="range"
								min="0"
								max="80"
								value={fontSize}
								onInput={event => {
									setFontSize(
										event.target.value
									);
								}}
								step="1"
							/>
						</div>
					</section>
				</section>
			</section>
		</section>
	);
};

export default FontSize;
