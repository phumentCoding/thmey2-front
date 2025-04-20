export const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-") // Replace spaces and special characters with hyphens
      .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};
  