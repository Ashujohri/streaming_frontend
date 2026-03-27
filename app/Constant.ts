export const APP_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5eb03855-b753-4788-b9b3-0cc29e3d2891/web/IN-en-20260223-TRIFECTA-perspective_7bcba0fc-d5a5-42f6-b4ed-2ca56a458c61_medium.jpg";

export const HEADER = {
  NETFLIX_LOGO:
    "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png",
  USER_ICON:
    "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/SO2HoVCx33X8phZh2pZZmQ4QgNY/AAAABS8sWFjSyj1zyfgcnGamqyJ1E2ZubZGo8dndCM_ipf_5UpmVlkuf8IXzQlmPZQqTMWNjWukESRdLkFGHnf7zbY3MJCO3r4s.png?r=229",
  NAV_LINKS: [
    { label: "Home", path: "/browser" },
    { label: "TV Shows", path: "/browser/television" },
    { label: "Movies", path: "/browser/movies" },
    { label: "New & Popular", path: "" },
    { label: "My List", path: "" },
  ],
};

export const PAGES = {
  DEFAULT_PAGE: "/",
  LOGIN_PAGE: "/login",
  BROWSE_PAGE: "/browser",
};

export const API_OPTION = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmMxYzdiY2YxNDZlMDcyNjM3ZmIxNDRmMWM2ZmIzNSIsIm5iZiI6MTY5NjMzNjgwNC4zMjYwMDAyLCJzdWIiOiI2NTFjMGJhNDIyM2E4YjAxMjA2ZDFhYjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.8RmzRwYEsiew8UVesd8AftFm-wjzq2_AFy8zCQAj988",
  },
};

export const TMDB_ICONS = {
  TMDB: "https://image.tmdb.org/t/p/w500",
  TMDB_TV: "https://api.themoviedb.org/3/tv/",
};

export const MEDIA_TYPE = {
  MOVIE: "movie",
  TELEVISION: "tv",
};
