"use client";
function Register() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData);

		try {
			const response = await fetch("/api/users?q=register", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
			if (response.ok) {
				console.log("User bien save");
			} else {
				console.log("Erreur lors de la sauvegarde");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Votre prénom</label>
					<input type="text" name="name" placeholder="name" />
				</div>
				<div>
					<label htmlFor="email">Votre email</label>
					<input type="email" name="email" placeholder="email" />
				</div>
				<div>
					<label htmlFor="password">Mot de passe</label>
					<input
						type="password"
						name="password"
						placeholder="password"
					/>
				</div>
				<div>
					<label htmlFor="street">Votre adresse</label>
					<input type="text" name="street" placeholder="street" />
				</div>
				<div>
					<label htmlFor="zipcode">Code postal</label>
					<input type="text" name="zipcode" placeholder="zipcode" />
				</div>
				<button type="submit">Envoyer</button>
			</form>
		</section>
	);
}

export default Register;
