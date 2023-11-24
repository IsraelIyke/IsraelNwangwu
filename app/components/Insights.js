import InsightCard from "./InsightCard";

const insights = [
  {
    id: 1,
    date: "3/11/2023",
    title: "Why Signals Are Better Than React Hooks",
    description: "",
    link: "https://www.youtube.com/watch?v=SO8lBVWF2Y8",
    img: "/images/signal-vs-hooks.png",
  },
  {
    id: 2,
    date: "24/11/2023",
    title: "Keeping up with CSS: The features released in 2023",
    description: "",
    link: "https://www.youtube.com/watch?v=LGRogkgRrOs&pp=ygUNa2VsdmluIHBvd2VsbA%3D%3D",
    img: "/images/new-css-features.png",
  },

  {
    id: 3,
    date: "08/09/2023",
    title: "Bun is disrupting JavaScript land",
    description: "",
    link: "https://www.youtube.com/watch?v=dWqNgzZwVJQ",
    img: "/images/bun-first-look.png",
  },
];

export default function Insights() {
  return (
    <div id="insights" className="insights">
      <h3>Dev Insights and Inspiration</h3>
      <p>
        Discover industry insights, expert tips and dev Inspiration. Stay
        updated with the latest trend in web development
      </p>
      <div className="insights-container">
        {insights.map((items) => (
          <InsightCard
            key={items.id}
            date={items.date}
            title={items.title}
            description={items.description}
            link={items.link}
            img={items.img}
          />
        ))}
      </div>
    </div>
  );
}
