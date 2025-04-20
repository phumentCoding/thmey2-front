import { useState, useEffect } from "react";
import newsApi from "../api/newsApi";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    const fetchNews = async () => {
      try {
        const response = await newsApi.getAllNews();
        setNews(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return { news, loading, error };
};

export default useNews;
