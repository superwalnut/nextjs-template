export interface Resume {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    gender: string;
    phones: string[];
    emails: string[];
    dob?: Date;
    address: string;
    totalExperienceInYears: number;
    profession: string;
    summary: string;
    skills: string[];
    languages: string[];
    educations: ResumeEducation[];
    certifications: ResumeCertification[];
    experiences: ResumeExperience[];
    awards: ResumeAward[];
    references: ResumeReference[];
    resumeFileUrl: string;
    lastUpdated: Date;
}

export interface ResumeEducation {
    startYear?: number;
    isCurrent: boolean;
    endYear?: number;
    issuingOrganization: string;
    description: string;
}

export interface ResumeCertification {
    year?: number;
    issuingOrganization: string;
    description: string;
}

export interface ResumeExperience {
    startDate?: Date;
    endDate?: Date;
    isCurrent: boolean;
    durationInMonths?: number;
    company: string;
    location: string;
    title: string;
    description: string;
}

export interface ResumeAward {
    year?: number;
    title: string;
    description: string;
}

export interface ResumeReference {
    fullName: string;
    phoneNumber: string;
    email: string;
    company: string;
    position: string;
    description: string;
}