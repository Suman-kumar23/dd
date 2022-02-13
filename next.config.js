const STUDIO_REWRITE = {
  source: "/airbnb/:path*",
  destination:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3333/airbnb/:path*"
      : "/airbnb/index.html",
};

module.exports = {
  reactStrictMode: true,
  rewrites: () => [STUDIO_REWRITE],
};
