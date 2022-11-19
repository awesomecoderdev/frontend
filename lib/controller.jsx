export const protectedRoutes = [
	"/dashboard",
	"/payments",
	"/settings",
	"/invoices",
	"/profile",
	"/support",
	"/websites",
	"/profile",
	"/notifications",
];

export const disabledHeader = [
	"/login",
	"/signup",
	"/verify-email/[[...params]]",
	"/404",
];

export const disabledFooter = [
	"/login",
	"/signup",
	"/verify-email/[[...params]]",
	"/404",
];

export const notAllowedRoutes = ["/login"];

export default {
	protectedRoutes,
	notAllowedRoutes,
	disabledHeader,
	disabledFooter,
};
