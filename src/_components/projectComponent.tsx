import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image";
import 'devicon/devicon.min.css';

interface ProjectComponentProps {
  title: string;
  logo: string;
  summary: string;
  link: string;
  languages: string[];
}

const ProjectComponent: React.FC<ProjectComponentProps> = ({
  title,
  logo,
  summary,
  link,
  languages,
}) => {
  return (
    <>
      <Card className="py-4  w-full min-w-[250px] onHover">
        <a href={link} target="_blank">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold fit-content mx-auto">
              {title}
            </p>
          </CardHeader>
          <CardContent className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-contain w-auto h-[200px] mx-auto"
              src={logo}
              height={220}
              width={220}
              style={{
                filter: title === "Dash Dish" ? "invert(100%)" : "none",
              }}
            />
          </CardContent>
          <CardFooter className="block">
            <p className="mx-auto fit-content p-2">{summary}</p>
            <div className="flex justify-center space-x-4">
              {
                languages.map((lang) => (
                  <i key={lang} className={`devicon-${lang}-plain colored text-2xl`}></i>
                ))
              }
            </div>
          </CardFooter>
        </a>
      </Card>
    </>
  );
};

export default ProjectComponent;
