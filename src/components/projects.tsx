import ProjectComponent from "./projectComponent";
import dashdish from '@/images/dashdish.png';
import pbshaun from '@/images/pb.jpg';
import solar from '@/images/solar.jpg';
import snap from '@/images/snaptalk.png';

const Projects = () => {
  const projectList = [
    {
      title: "Dash Dish",
      logo: dashdish.src,
      summary:"An AI powered cookbook",
      link:"https://dash-dish.vercel.app/",
      languages:["next","openai","mongo"]
    },
    {
      title: "Solar Traveller",
      logo: solar.src,
      summary:"A 3D trip into space",
      link:"https://github.com/Charlotte-Greenaway/solarsystem",
      languages:["react","aframe"]
    },
    {
      title: "Snap Talk",
      logo: snap.src,
      summary:"Instant messaging service",
      link:"https://github.com/Charlotte-Greenaway/SnapTalk",
      languages:["react","node", "mongo"]
    },
    {
      title: "PB Shaun",
      logo: pbshaun.src,
      summary:"A photography services website",
      link:"https://github.com/Charlotte-Greenaway/PhotographyByShaun",
      languages:["react"]
    },
  ];
  return (
    <div className="flex flex-wrap flex-row justify-center space-between">
      {projectList.map((item,index) => (
        <ProjectComponent title={item.title} languages={item.languages} logo={item.logo} summary={item.summary} link={item.link} key={index}/>
      ))}
    </div>
  );
};

export default Projects;
