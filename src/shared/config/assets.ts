const productionBasePath = "/bs-orange";

export function assetPath(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = process.env.NODE_ENV === "production" ? productionBasePath : "";

  return `${basePath}${normalizedPath}`;
}
