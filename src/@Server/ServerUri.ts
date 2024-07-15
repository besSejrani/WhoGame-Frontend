const ServerUri = () => {
  let uri;
  if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
    uri = process.env.NEXT_PUBLIC_DEVELOPMENT_SERVER;
  }

  if (process.env.NEXT_PUBLIC_APP_ENV === "staging") {
    uri = process.env.NEXT_PUBLIC_STAGING_SERVER;
  }

  if (process.env.NEXT_PUBLIC_APP_ENV === "production") {
    uri = process.env.NEXT_PUBLIC_PRODUCTION_SERVER;
  }

  return uri;
};

export default ServerUri;
