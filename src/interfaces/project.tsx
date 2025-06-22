export interface ProjectImage {
  id: number;
  src: string;
  alt: string;
}

export interface ProjectSection {
  id: number;
  title: string;
  content: string;
  images: ProjectImage[];
}

export interface SoftwareProject {
    link: string;
}

export interface Project {
  title: string;
  intro: string;
  technologies: string[];
  software_project?: SoftwareProject;
  sections: ProjectSection[];
}