import React, { useEffect, useState } from "react";
import Heading from "../../components/Heading";
import Margin from "../../components/Margin";
import axios from "axios";
import DetailPage from "../DetailPage";
import { AnimatePresence } from "framer-motion";
import SkeletonCard from "../../components/SkeletonCard";
const apiUrl = import.meta.env.VITE_API_URL;

const colorSets = [
  {
    name: "mgreen",
    border: "border-mgreen-500",
    hoverBorder: "hover:border-mgreen-500",
    bg: "bg-mgreen-500/15",
    text: "text-mgreen-600",
  },
  {
    name: "mblue",
    border: "border-mblue-500",
    hoverBorder: "hover:border-mblue-500",
    bg: "bg-mblue-500/15",
    text: "text-mblue-600",
  },
  {
    name: "mred",
    border: "border-mred-500",
    hoverBorder: "hover:border-mred-500",
    bg: "bg-mred-500/15",
    text: "text-mred-600",
  },
  {
    name: "myellow",
    border: "border-myellow-500",
    hoverBorder: "hover:border-myellow-500",
    bg: "bg-myellow-500/15",
    text: "text-myellow-600",
  },
];

// 랜덤 색상 세트 선택 함수
function getRandomColorSet() {
  return colorSets[Math.floor(Math.random() * colorSets.length)];
}

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/lists`);
        const projectsWithColors = response.data.map((project) => {
          return {
            ...project,
            colorSet: getRandomColorSet(), // add random colorset
          };
        });
        setProjects(projectsWithColors);
      } catch (error) {
        console.error("fail to loading projects:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  const [selectedProject, setSelectedProject] = useState(null);

  const clickProject = async (projectId, colorSet) => {
    try {
      const res = await axios.get(`${apiUrl}/api/lists/${projectId}`);

      if (res.status !== 200)
        throw new Error("Failed to fetch project details");
      const project = res.data.project_id;
      const data = {
        ...project,
        colorSet,
      };
      setSelectedProject(data);
      console.log(data);
      // 예: 모달 열기나 상세 페이지 이동 등
      // setSelectedProject(data);
      // navigate(`/projects/${projectId}`);
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };
  // const data
  return (
    <div className="p-9 w-full h-screen">
      <Heading as="h1" color="mgreen" text="PROJECTS" />
      <Margin dir={"vertical"} space={"120px"} />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          : projects.map((project, i) => (
              <div
                key={i}
                onClick={() =>
                  clickProject(project.project_id._id, project.colorSet)
                }
                className={`box_card flex flex-col border-2 border-slate-700 rounded-sm ${project.colorSet.hoverBorder}`}
                style={{
                  backgroundImage: `url(../../images/${project.thumbnail})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <div className="card_text flex flex-col h-full bg-white/70 p-4">
                  <div className="mt-auto">
                    <p className={`font-russo text-2xl text-slate-700 mb-4`}>
                      {project.project_id.title}
                    </p>
                    <p className={`text-slate-700 text-lg leading-none`}>
                      {project.s_description}
                    </p>
                    <p className="text-white text-md leading-none mt-4">
                      {project.role.map((role, i) => (
                        <span
                          key={i}
                          className={`role py-1 px-2 rounded-2xl text-slate-700 bg-slate-200`}
                        >
                          {role}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <Margin dir={"vertical"} space={"36px"} />
      <AnimatePresence>
        {selectedProject !== null && (
          <DetailPage
            data={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default ProjectPage;
