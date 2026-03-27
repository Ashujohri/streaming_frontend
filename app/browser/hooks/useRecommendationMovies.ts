import { useQuery } from "@tanstack/react-query";
import { API_OPTION } from "@/app/Constant";

const fetchRecommendations = async (movieId: number, type: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${movieId}/recommendations`,
      API_OPTION
    );

    if (!response.ok) throw new Error("API Failed");

    const data = await response.json();

    return data?.results ?? [];
  } catch (error) {
    console.error("Recommendation API Error: ", error);

    return [];
  }
};


export const useRecommendation = (movieId: number, type: string) => {
  return useQuery({
    queryKey: ["recommendations", movieId, type],
    enabled: !!movieId,
    queryFn: () => fetchRecommendations(movieId!, type),
    staleTime: 1000 * 60 * 10,
  });
};
