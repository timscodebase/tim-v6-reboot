import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
  const options: ResponseInit = {
    headers: {
      "Content-Type": "application/json",
    },
    status: 200,
  }

  const articles = {
    articles: [
      {
        title:
          "CSS-Tricks.com - HTML, CSS, and JS in an ADD, OCD, Bi-Polar, Dyslexic and Autistic World",
        url: "https://css-tricks.com/hmtl-css-and-js-in-an-add-ocd-bi-polar-dyslexic-and-autistic-world/",
      },
      {
        title: "Sapper/SvelteKit + CSS Houdini",
        url: "https://dev.to/tithos/sveltekit-css-houdini-59l8",
      },
    ],
  }

  return new Response(JSON.stringify(articles, null, 2), options);  
};