export type ArticlesType = {
  title: string;
  url: string;
}
export type EducationType = {
  name: string;
  location: string;
  startYear: number;
  endYear: number | null;
  fieldsOfStudy: string[];
}
export type RecentJobsType = {
  role: string;
  company: string;
  startYear: number;
  endYear: number | null;
  description: string;
  jobSkills: string[];
}
export type ResumeDataType = {
  articles: ArticlesType[];
  education: EducationType[];
  recentJobs: RecentJobsType[];
}