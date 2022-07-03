const settings = {
  graphql: {
    uri: "http://localhost:3000/fastfood",
  },
  meta: {
    rootUrl: "http://localhost:3000",
    title: "App",
    description: "The app description goes here.",
    social: {
      graphic:
        "https://cheatcode-assets.s3.amazonaws.com/default-social-graphic.png",
      twitter: "@gonzaloaxel",
    },
  },
  routes: {
    authenticated: {
      pathAfterFailure: "/login",
    },
    public: {
      pathAfterFailure: "/documents",
    },
  },
};

export default settings;
