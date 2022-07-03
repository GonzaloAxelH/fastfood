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
        "https://www.clarin.com/img/2021/06/17/LC25eDtCT_1200x630__1.jpg",
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
