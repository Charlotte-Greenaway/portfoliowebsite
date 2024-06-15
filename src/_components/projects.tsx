import ProjectComponent from "./projectComponent";
const Projects = () => {
  const projectList = [
    {
      title: "Autohub",
      logo: "/images/autohub.png",
      summary:"Dealer Management System, built with Next.js and SQLite",
      link:"https://github.com/Charlotte-Greenaway/Autohub",
      languages:["next","tailwind", "sqlite"]
    },
    {
      title: "Dash Dish",
      logo: "/images/dashdish.png",
      summary:"An AI powered cookbook, built with Next.js and OpenAI's GPT-3",
      link:"https://dashdish.co.uk",
      languages:["next","openai","mongo","tailwind"]
    },
    {
      title: "Solar Traveller",
      logo: "/images/solar.jpg",
      summary:"A 3D trip into space, an experiment with aframe and react",
      link:"https://solartraveller.charlotte-greenaway.com",
      languages:["react","aframe"]
    },
    {
      title: "Snap Talk",
      logo: "/images/snaptalk.png",
      summary:"Instant messaging service utilising websockets and mongoDB",
      link:"https://github.com/Charlotte-Greenaway/SnapTalk",
      languages:["react","node", "mongo"]
    },
    {
      title: "First Look",
      logo: "/images/pb.jpg",
      summary:"Wedding photography site built with tailwind and react",
      link:"https://firstlook.charlotte-greenaway.com",
      languages:["react","tailwind"]
    },
    {
      title: "Purrfect Toys",
      logo: "/images/purrfecttoys.png",
      summary:"E-commerce site built with Sanity, Next auth and Paypal",
      link:"https://purrfecttoys.charlotte-greenaway.com/",
      languages:["next","sanity","tailwind"]
    }
  ];
  return (
    <div className="grid grid-columns gap-4">
      {projectList.map((item) => (
        <div key={item.link}>
        <ProjectComponent {...item} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
