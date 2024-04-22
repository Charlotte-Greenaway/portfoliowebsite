import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
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
      <Card className="py-4 max-w-[350px] w-1/5 min-w-[250px] m-3 onHover">
        <a href={link} target="_blank">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-tiny uppercase font-bold fit-content mx-auto">
              {title}
            </p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="rounded-xl h-[150px] mx-auto fit-content w-auto pic"
              src={logo}
              height={220}
              style={{
                filter: title === "Dash Dish" ? "invert(100%)" : "none",
              }}
            />
          </CardBody>
          <CardFooter className="block">
            <p className="mx-auto fit-content p-2">{summary}</p>
            <div className="flex justify-center">
              {languages.includes("react") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="31"
                  viewBox="0 0 40 44.964"
                >
                  <path
                    d="M21.087,20.97a4.015,4.015,0,1,0,5.485,1.469A4.015,4.015,0,0,0,21.087,20.97Zm18,4.356q-.4-.452-.834-.906.307-.322.594-.644c3.61-4.056,5.134-8.124,3.722-10.57-1.354-2.345-5.381-3.044-10.422-2.063q-.745.146-1.482.329-.141-.486-.3-.967C28.65,5.351,25.887,2,23.064,2c-2.708,0-5.325,3.141-6.994,8q-.246.719-.456,1.449-.493-.121-.989-.223c-5.319-1.092-9.6-.373-11.013,2.074-1.351,2.347.062,6.182,3.436,10.054q.5.575,1.032,1.124c-.417.429-.812.859-1.18,1.285-3.293,3.817-4.625,7.59-3.276,9.927,1.393,2.413,5.617,3.2,10.758,2.191q.625-.124,1.243-.279.226.79.5,1.567c1.662,4.76,4.264,7.8,6.963,7.8,2.786,0,5.58-3.266,7.272-8.226.134-.392.26-.8.38-1.218q.8.2,1.607.353c4.954.937,8.886.2,10.232-2.138,1.39-2.415-.043-6.466-3.495-10.408ZM5.276,14.257c.867-1.506,4.369-2.094,8.961-1.151q.44.091.9.2a46.005,46.005,0,0,0-.947,6.02,46.956,46.956,0,0,0-4.73,3.807q-.493-.51-.96-1.045h0C5.6,18.773,4.462,15.671,5.276,14.257Zm8.738,12.878c-1.148-.869-2.215-1.76-3.183-2.655.968-.89,2.035-1.777,3.18-2.644q-.062,1.325-.061,2.651t.064,2.648Zm0,8.859a16.269,16.269,0,0,1-5.935.209,3.97,3.97,0,0,1-2.79-1.476c-.818-1.418.251-4.447,3.067-7.712q.531-.614,1.1-1.2a46.066,46.066,0,0,0,4.737,3.822,46.768,46.768,0,0,0,.958,6.1q-.564.141-1.135.254ZM29.977,17.92q-1.131-.713-2.29-1.38-1.141-.656-2.308-1.264c1.333-.561,2.644-1.039,3.909-1.429a40.955,40.955,0,0,1,.69,4.073Zm-12.092-7.3c1.43-4.162,3.547-6.7,5.179-6.7,1.738,0,4,2.739,5.473,7.189q.144.435.272.875a46.038,46.038,0,0,0-5.681,2.183,45.1,45.1,0,0,0-5.663-2.208Q17.659,11.286,17.886,10.622Zm-.9,3.2a41.159,41.159,0,0,1,3.889,1.443q-2.362,1.219-4.6,2.656C16.452,16.488,16.692,15.114,16.986,13.823Zm-.711,17.223q1.117.715,2.267,1.378,1.173.675,2.377,1.294A40.909,40.909,0,0,1,17,35.212C16.7,33.9,16.457,32.505,16.275,31.046ZM28.54,38.117a16.267,16.267,0,0,1-2.783,5.245h0a3.97,3.97,0,0,1-2.672,1.679c-1.637,0-3.727-2.439-5.148-6.509q-.251-.722-.462-1.457a45.207,45.207,0,0,0,5.686-2.27,46.762,46.762,0,0,0,5.727,2.2q-.16.56-.347,1.111Zm.814-2.977c-1.28-.4-2.609-.882-3.962-1.451q1.144-.6,2.3-1.271,1.191-.687,2.32-1.409a40.811,40.811,0,0,1-.663,4.132Zm1-10.662q0,2.048-.128,4.093c-1.108.75-2.277,1.482-3.494,2.184s-2.412,1.342-3.59,1.924q-1.859-.891-3.646-1.92T16.028,28.58q-.155-2.044-.156-4.1h0q0-2.05.153-4.1c1.107-.756,2.268-1.488,3.468-2.181s2.421-1.336,3.63-1.917q1.836.892,3.606,1.912t3.482,2.155q.147,2.056.147,4.118Zm2.151-11.45c4.319-.84,7.576-.275,8.392,1.138.869,1.505-.377,4.83-3.493,8.333h0q-.258.29-.536.582a45.1,45.1,0,0,0-4.82-3.795,45.055,45.055,0,0,0-.912-5.955q.7-.172,1.369-.3Zm-.292,8.733a40.837,40.837,0,0,1,3.285,2.67,40.735,40.735,0,0,1-3.275,2.716q.052-1.335.051-2.672,0-1.358-.062-2.715Zm8.7,13.014c-.817,1.419-3.974,2.011-8.211,1.209q-.728-.137-1.494-.327a45.12,45.12,0,0,0,.871-6.029,44.826,44.826,0,0,0,4.8-3.858q.4.412.755.82h0a16.264,16.264,0,0,1,3.154,5.031,3.969,3.969,0,0,1,.121,3.153Z"
                    transform="translate(-3.104 -2)"
                    fill="black"
                  ></path>
                </svg>
              )}
              {languages.includes("next") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid"
                  viewBox="0 0 512 308.883"
                  width="30"
                  height="30"
                >
                  <path d="m120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675h-97.574zm105.22 0h10.26l45.467 63.423 46.473-63.424 63.211-80.56-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128zm118.898 7.676v-7.677h110.048v7.676h-50.699v136.54h-8.852v-136.539zm-344.928-7.677h11.065l152.58 228.323-63.053-84.107-91.338-133.308-.402 133.31h-8.852zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212s-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z" />
                </svg>
              )}
              {languages.includes("sqlite") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 6.554 6.555"
                  className="mx-1"
                  preserveAspectRatio="xMidYMid"
                >
                  <defs>
                    <linearGradient
                      x1="2.983"
                      y1=".53"
                      x2="2.983"
                      y2="4.744"
                      id="A"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#97d9f6" offset="0%" />
                      <stop stopColor="#0f80cc" offset="92.024%" />
                      <stop stopColor="#0f80cc" offset="100%" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M4.96.29H.847c-.276 0-.5.226-.5.5v4.536c0 .276.226.5.5.5h2.71c-.03-1.348.43-3.964 1.404-5.54z"
                    fill="#0f80cc"
                  />
                  <path
                    d="M4.81.437H.847c-.196 0-.355.16-.355.355v4.205c.898-.345 2.245-.642 3.177-.628A28.93 28.93 0 0 1 4.811.437z"
                    fill="url(#A)"
                  />
                  <path
                    d="M5.92.142c-.282-.25-.623-.15-.96.148l-.15.146c-.576.61-1.1 1.742-1.276 2.607a2.38 2.38 0 0 1 .148.426l.022.1.022.102s-.005-.02-.026-.08l-.014-.04a.461.461 0 0 0-.009-.022c-.038-.087-.14-.272-.187-.352a8.789 8.789 0 0 0-.103.321c.132.242.212.656.212.656s-.007-.027-.04-.12c-.03-.083-.176-.34-.21-.4-.06.22-.083.368-.062.404.04.07.08.2.115.324a7.52 7.52 0 0 1 .132.666l.005.062a6.11 6.11 0 0 0 .015.75c.026.313.075.582.137.726l.042-.023c-.09-.284-.128-.655-.112-1.084.025-.655.175-1.445.454-2.268C4.548 1.938 5.2.94 5.798.464c-.545.492-1.282 2.084-1.502 2.673-.247.66-.422 1.28-.528 1.873.182-.556.77-.796.77-.796s.29-.356.626-.865l-.645.172-.208.092s.53-.323.987-.47c.627-.987 1.31-2.39.622-3.002"
                    fill="#003b57"
                  />
                </svg>
              )}
              {languages.includes("mongo") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z" />
                </svg>
              )}
              {languages.includes("tailwind") && (
                <svg
                  height="30"
                  preserveAspectRatio="xMidYMid"
                  width="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 153.6"
                >
                  <linearGradient id="a" x1="-2.778%" y1="32%" y2="67.556%">
                    <stop offset="0" stopColor="#2298bd" />
                    <stop offset="1" stopColor="#0ed7b5" />
                  </linearGradient>
                  <path
                    d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0zM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8z"
                    fill="url(#a)"
                  />
                </svg>
              )}
              {languages.includes("node") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="30"
                  height="30"
                  viewBox="0 0 32 32"
                  version="1.1"
                >
                  <title>nodejs</title>
                  <path d="M24.871 18.491c0-2.374-1.605-3.007-4.982-3.453-3.413-0.451-3.76-0.685-3.76-1.483 0-0.66 0.294-1.541 2.822-1.541 2.258 0 3.090 0.486 3.433 2.008 0.032 0.143 0.158 0.248 0.309 0.249h1.426c0.092-0.001 0.174-0.040 0.232-0.101l0-0c0.053-0.057 0.085-0.133 0.085-0.217 0-0.010-0-0.019-0.001-0.029l0 0.001c-0.221-2.622-1.963-3.844-5.483-3.844-3.134 0-5.004 1.322-5.004 3.54 0 2.406 1.859 3.070 4.867 3.368 3.599 0.352 3.878 0.878 3.878 1.586 0 1.228-0.986 1.752-3.302 1.752-2.908 0-3.548-0.73-3.763-2.177-0.025-0.153-0.156-0.269-0.315-0.269-0 0-0.001 0-0.001 0h-1.421c-0.001 0-0.001 0-0.002 0-0.174 0-0.315 0.141-0.315 0.315 0 0 0 0.001 0 0.001v-0c0 1.852 1.007 4.059 5.817 4.059 3.484 0.001 5.481-1.369 5.481-3.765zM15.998 30.996c-0 0-0.001 0-0.001 0-0.424 0-0.821-0.115-1.162-0.315l0.011 0.006-3.669-2.171c-0.547-0.306-0.28-0.415-0.1-0.479 0.633-0.2 1.183-0.456 1.691-0.773l-0.031 0.018c0.034-0.016 0.075-0.026 0.117-0.026 0.058 0 0.111 0.018 0.156 0.048l-0.001-0.001 2.819 1.673c0.049 0.027 0.108 0.042 0.17 0.042s0.121-0.016 0.172-0.043l-0.002 0.001 10.991-6.343c0.101-0.062 0.167-0.171 0.167-0.296 0-0 0-0.001 0-0.001v0-12.684c-0-0.128-0.068-0.239-0.17-0.302l-0.002-0.001-10.986-6.338c-0.049-0.028-0.107-0.044-0.169-0.044s-0.121 0.016-0.171 0.045l0.002-0.001-10.983 6.34c-0.104 0.062-0.172 0.174-0.174 0.301v12.684c0 0.126 0.070 0.235 0.172 0.293l0.002 0.001 3.010 1.739c1.633 0.817 2.634-0.145 2.634-1.112v-12.523c0-0 0-0 0-0 0-0.174 0.141-0.316 0.316-0.316 0.001 0 0.003 0 0.004 0h1.393c0 0 0.001 0 0.001 0 0.175 0 0.317 0.141 0.318 0.316v12.523c0.016 0.118 0.026 0.255 0.026 0.394 0 1.682-1.363 3.045-3.045 3.045-0.082 0-0.164-0.003-0.245-0.010l0.011 0.001c-0.024 0-0.053 0.001-0.082 0.001-0.906 0-1.753-0.256-2.47-0.701l0.020 0.012-2.884-1.658c-0.694-0.409-1.152-1.153-1.152-2.004 0-0 0-0 0-0v0-12.684c0-0.851 0.458-1.594 1.141-1.997l0.011-0.006 10.991-6.351c0.333-0.186 0.731-0.295 1.155-0.295s0.821 0.109 1.167 0.301l-0.012-0.006 10.989 6.351c0.695 0.409 1.154 1.152 1.155 2.003v12.684c-0.002 0.851-0.46 1.595-1.144 1.998l-0.011 0.006-10.989 6.346c-0.33 0.194-0.726 0.309-1.149 0.309-0.002 0-0.005 0-0.007 0h0z" />
                </svg>
              )}
              {languages.includes("aframe") && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path d="M17.37 17.07H6.57L4.24 24H3.01l8.23-24h1.52l8.23 24h-1.3zm-.39-1.13-5-14.96-5.03 14.98h10.03z" />
                </svg>
              )}
            </div>
          </CardFooter>
        </a>
      </Card>
    </>
  );
};

export default ProjectComponent;
