const ServerUri = () => {
  let uri;
  if (process.env.NEXT_PUBLIC_APP_ENV === "development") {
    uri = process.env.NEXT_PUBLIC_DEVELOPMENT_CLIENT;
  }

  if (process.env.NEXT_PUBLIC_APP_ENV === "staging") {
    uri = process.env.NEXT_PUBLIC_STAGING_CLIENT;
  }

  if (process.env.NEXT_PUBLIC_APP_ENV === "production") {
    uri = process.env.NEXT_PUBLIC_PRODUCTION_CLIENT;
  }

  return uri;
};

export default ServerUri;
