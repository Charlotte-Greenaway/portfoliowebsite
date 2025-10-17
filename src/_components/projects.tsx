import ProjectComponent from "./projectComponent";
const Projects = () => {
  const projectList = [
    {
      title: "Purrfect Toys",
      logo: "/images/purrfecttoys.png",
      summary:"E-commerce site built with Sanity, Next auth and Paypal",
      link:"https://purrfecttoys.charlotte-greenaway.com/",
      languages:["nextjs","sanity","tailwindcss"]
    },
    {
      title: "Furry Friends",
      logo: "/images/furry-friends.png",
      summary:"Pet adoption site built with Astro and tailwind",
      link:"https://furry-friends.charlotte-greenaway.com/",
      languages:["astro","tailwindcss"]
    },
    {
      title:"Github Stats",
      logo: "/images/github-stats.png",
      summary:"Github stats dashboard built in flask using tailwind css and chart.js",
      link:"https://github-stats.charlotte-greenaway.com/",
      languages:["flask","tailwindcss"]
    },
    {
      title: "Dash Dish",
      logo: "/images/dashdish.png",
      summary:"An AI powered cookbook, built with Next.js and OpenAI's GPT-3",
      link:"https://dashdish.co.uk",
      languages:["nextjs","openai","mongodb","tailwindcss"]
    },
    {
      title: "Solar Traveller",
      logo: "/images/solar.jpg",
      summary:"A 3D trip into space, an experiment with aframe and react",
      link:"https://solartraveller.charlotte-greenaway.com",
      languages:["react","aframe"]
    },
    {
      title: "First Look",
      logo: "/images/pb.jpg",
      summary:"Wedding photography site built with tailwind and react",
      link:"https://firstlook.charlotte-greenaway.com",
      languages:["react","tailwindcss"]
    },
    
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {projectList.map((item) => (
        <ProjectComponent {...item} key={item.link} />
      ))}
    </div>
  );
};

export default Projects;
