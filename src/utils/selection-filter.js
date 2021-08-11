export default function selectionFilter({ series, films }) {
  return {
    films: [
      {
        title: "Children",
        data: films.filter((item) => item.genre === "children"),
      },
      {
        title: "Drama",
        data: films.filter((item) => item.genre === "drama"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
      {
        title: "Suspense",
        data: films.filter((item) => item.genre === "suspence"),
      },
      {
        title: "Thriller",
        data: films.filter((item) => item.genre === "thriller"),
      },
    ],
    series: [
      {
        title: "Children",
        data: series.filter((item) => item.genre === "children"),
      },
      {
        title: "Comedies",
        data: series.filter((item) => item.genre === "comedies"),
      },
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
      {
        title: "Feel Good",
        data: series.filter((item) => item.genre === "feel-good"),
      },
    ],
  };
}
