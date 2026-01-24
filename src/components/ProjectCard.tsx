import { projectcardType } from "@/data";

const ProjectCard = ({ projectCard }: { projectCard: projectcardType }) => {
    return (
        <div className="relative overflow-hidden rounded-xl shadow-lg" style={{ width: "445px", height: "309px",  backgroundImage: `url(${projectCard.url})`}}>
        
        {/* CARD TITLE */}
        <div className="absolute top-0 left-0 w-full h-28 z-10 grid place-content-center px-4">
            <p className="p-2 text-2xl md:text-4xl font-bold text-center" style={{ color: projectCard.titleColor }}>{projectCard.title}</p>
        </div>
        
        {/* OVERLAY IMAGE */}
        <img src={projectCard.overlayUrl} alt={`${projectCard.title} overlay`} className="absolute top-28 left-1/2 -translate-x-1/2 w-100 h-auto pointer-events-none rounded-t-xl" />
        
        </div>
    );
};

export default ProjectCard;