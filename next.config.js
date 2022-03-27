const nextConfig = {
  images: {
    domains: [
      "lafka.althemist.com",
      "secure.gravatar.com",
      "images.unsplash.com",
    ],
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  },
};

module.exports = nextConfig;
