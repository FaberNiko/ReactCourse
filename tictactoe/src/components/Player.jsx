import { useState } from "react";

export default function Player({ name, symbol }) {
	const [isEditing, setIsEditing] = useState(false);

	function handleEdit() {
		setIsEditing(editing => !editing);
	}

	let playerName = <span className="player-name">{name}</span>;

	let btnCaption = "Edit";

	if (isEditing) {
		playerName = <input type="text" required value={name} />;
		// btnCaptionn = 'Save'
	}

	return (
		<li>
			<span className="player">
				{playerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}
