export const handleErrors = (error) => {
    if (error.response) {
      return error.response.data.message || "An error occurred.";
    } else if (error.request) {
      return "No response from the server. Please try again.";
    } else {
      return "Something went wrong.";
    }
};
  