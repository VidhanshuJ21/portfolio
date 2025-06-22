export interface PortfolioSpecification {
	parameter: string;
	value: string;
}

export interface PortfolioImage {
	id: number;
	src: string;
}

export interface PortfolioSection {
	id: number;
	title: string;
	content: string;
	images: PortfolioImage[];
}


export interface Portfolio {
	title: string;
	intro: string;
	technologies: string[];
	specifications: PortfolioSpecification[];
	sections: PortfolioSection[];
}
