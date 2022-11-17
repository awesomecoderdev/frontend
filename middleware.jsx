import { NextResponse } from "next/server";
import { protectedRoutes } from "./lib/controller";

export default function middleware(req, res) {
	const auth = req.cookies.get("next_auth");
	const verified = req.cookies.get("verified");
	const url = req.url;
	let redirectLogin = false;

	protectedRoutes.map((route) => {
		if (url.includes(route)) {
			redirectLogin = true;
		}
	});

	if (auth && auth == "true" && url.includes("/login")) {
		return NextResponse.redirect(`${process.env.BASE_URL}/dashboard`);
	}

	if (auth && auth == "true" && url.includes("/signup")) {
		return NextResponse.redirect(`${process.env.BASE_URL}/dashboard`);
	}

	if (auth && auth == "false" && redirectLogin == true) {
		return NextResponse.redirect(`${process.env.BASE_URL}/login`);
	}

	if (verified && verified == "false" && redirectLogin == true) {
		return NextResponse.redirect(`${process.env.BASE_URL}/verify-email`);
	}

	if (verified && verified == "true" && url.includes("/verify-email")) {
		return NextResponse.redirect(`${process.env.BASE_URL}/dashboard`);
	}

	if (!verified && url.includes("/verify-email")) {
		return NextResponse.redirect(`${process.env.BASE_URL}/login`);
	}
}
