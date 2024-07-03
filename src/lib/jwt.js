"use server";

import jwt from "jsonwebtoken";

export const sign = (payload) => {
	return jwt.sign(payload, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});
};

export const verify = (token) => {
	return jwt.verify(token, process.env.JWT_SECRET);
};
