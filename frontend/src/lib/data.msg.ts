export interface Data {
    header:       string[];
    hero:         Hero;
    skills:       Skill[];
    education:    Education[];
    experience:   Experience[];
    testimonials: Testimonial[];
    projects:     Project[];
    footer:       Footer;
}

export interface Education {
    name:        string;
    title:       string;
    img_url:     string;
    description: string;
    start_year:  number;
    end_year:    number;
    status:      boolean;
}

export interface Experience {
    name:       string;
    title:      string;
    job_type:   string;
    about:      string;
    img_url:    string;
    start_year: string;
    end_year:   string;
    tech:       string[];
    status:     boolean;
}

export interface Footer {
    left_side:  string;
    right_side: string;
}

export interface Hero {
    name:        string;
    title:       string;
    profile_url: string;
    about:       string;
}

export interface Project {
    name:        string;
    title:       string;
    about:       string;
    img_url:     string;
    github_link: string;
}

export interface Skill {
    name:      string;
    img_url:   string;
    knowledge: number;
}

export interface Testimonial {
    name:    string;
    date:    string;
    title:   string;
    details: string;
}
