import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const options: ResponseInit = {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  }

  const schools = {
    education: [
      {
        name: "Diablo Valley College",
        location: "Pleasant Hill, CA",
        startYear: 2018,
        endYear: 2020,
        fieldsOfStudy: ["Sociology", "Statistics"],
      },
      {
        name: "Contra Costa College - S.P.I.R.I.T",
        location: "San Pablo, CA",
        startYear: 2016,
        endYear: 2018,
        fieldsOfStudy: [
          "County supervised peer support and social work training",
          "One on one peer interaction simulation",
          "Onsite training",
        ],
      },
      {
        name: "Diablo Valley College",
        location: "Pleasant Hill, CA",
        startYear: 2006,
        endYear: 2008,
      },
      {
        name: "Harford Community College",
        location: "Bel Air, MD",
        startYear: 2000,
        endYear: 2002,
      },
    ],
  }

  return new Response(JSON.stringify(schools, null, 2), options);  
};