import { c as create_ssr_component, b as subscribe, d as set_store_value, v as validate_component, e as escape } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const isLogoAnimationEnded = writable(false);
const Logo_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".logo-wrapper.svelte-21ocvm{display:flex;padding-top:2rem;justify-content:center;flex-direction:column;font-family:'Prompt', sans-serif}@media(max-width: 900px){.logo-wrapper.svelte-21ocvm{height:unset;margin:1rem 0}}.title.svelte-21ocvm{font-size:var(--font-size-lg);font-weight:900;margin:0}@media(min-width: 768px){.title.svelte-21ocvm{font-size:2.5rem;margin-bottom:2rem}}.name.svelte-21ocvm{display:flex;align-items:center;font-weight:900;font-size:var(--font-size-xl);margin:0;background:var(--gradient-red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;background-size:100% 200%;background-position-y:100%;border-radius:0.4rem;transform-origin:5% 2%;animation:svelte-21ocvm-flop-down 1.5s cubic-bezier(0.8, 1.3, 0.89, 0.64), pulse 1.5s ease-in-out infinite}@keyframes svelte-21ocvm-flop-down{0%{transform:rotate(-90deg)}100%{transform:rotate(0deg)}}",
  map: null
};
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<a class="${"logo-wrapper svelte-21ocvm"}" href="${"/"}"><p class="${"name svelte-21ocvm"}">Tim Smith</p>
	<p class="${"title svelte-21ocvm"}">Full Stack Web Engineer</p>
</a>`;
});
const Nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".fly-down.svelte-c5g3df.svelte-c5g3df{transform:translateY(0);transition:transform 0.5s cubic-bezier(0.8, 1.3, 0.89, 0.64)}nav.svelte-c5g3df.svelte-c5g3df{transform:translateY(-130%);transition:transform 0s ease}nav.svelte-c5g3df.svelte-c5g3df{display:flex;background:var(--gradient-red);justify-content:space-around;align-items:center;margin-bottom:1rem;border-radius:calc(var(--border-radius) / 4)}nav.svelte-c5g3df a.svelte-c5g3df{margin:0.5rem;padding:1rem;font-size:var(--font-size-base)}@media(max-width: 900px){nav.svelte-c5g3df.svelte-c5g3df{flex-wrap:wrap}nav.svelte-c5g3df a.svelte-c5g3df{font-size:1rem;padding:0.5rem}}nav.svelte-c5g3df a.svelte-c5g3df{color:var(--color-blue);text-decoration:none;font-weight:900}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isLogoAnimationEnded, $$unsubscribe_isLogoAnimationEnded;
  $$unsubscribe_isLogoAnimationEnded = subscribe(isLogoAnimationEnded, (value) => $isLogoAnimationEnded = value);
  set_store_value(isLogoAnimationEnded, $isLogoAnimationEnded = false, $isLogoAnimationEnded);
  $$result.css.add(css$3);
  $$unsubscribe_isLogoAnimationEnded();
  return `<div><nav aria-label="${"Main"}" class="${["svelte-c5g3df", $isLogoAnimationEnded ? "fly-down" : ""].join(" ").trim()}"><a href="${"/"}" class="${"svelte-c5g3df"}">Me</a>
		<a href="${"/projects"}" class="${"svelte-c5g3df"}">Projects</a>
		<a href="${"/resume"}" class="${"svelte-c5g3df"}">Resume</a>
		<a href="${"/uses"}" class="${"svelte-c5g3df"}">Uses</a></nav>
</div>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".nav-wrapper.svelte-9e8e49{overflow:hidden;height:170px}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header>${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}
	<div class="${"nav-wrapper svelte-9e8e49"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-uascm8{display:flex;flex-wrap:wrap;color:var(--color-footer);justify-content:space-between;align-items:center;margin-top:1rem;padding:4rem 3rem;text-align:center;background:rgba(0, 0, 0, 0.2)}a.svelte-uascm8{padding:1rem}@media print{footer.svelte-uascm8{display:none}}@media(max-width: 900px){footer.svelte-uascm8{justify-content:center;padding:2rem 1.5rem;flex-direction:column;margin-left:-1rem;margin-right:-1rem}.date.svelte-uascm8{display:none}.name.svelte-uascm8{font-size:1.5rem !important}}section.svelte-uascm8{display:flex;gap:var(--spacer)}span.svelte-uascm8{font-size:2rem;text-align:center}.date.svelte-uascm8{font-size:1rem}.name.svelte-uascm8{font-size:2rem;color:var(--color-footer);font-weight:900;background:var(--gradient-red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}p.svelte-uascm8{display:flex;flex-wrap:wrap;flex-direction:column;align-items:center}.logo.svelte-uascm8:hover{text-decoration:none}a.svelte-uascm8{color:var(--color-footer);text-decoration:none}a.svelte-uascm8:hover{color:var(--color-text);text-decoration:underline;text-decoration-color:var(--accent)}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-uascm8"}"><section class="${"svelte-uascm8"}"><a href="${"https://github.com/timscodebase"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"svelte-uascm8"}">Github</a>
		<a href="${"https://twitter.com/timsmith23"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"svelte-uascm8"}">Twitter</a></section>
	<a class="${"logo svelte-uascm8"}" href="${"/"}"><p class="${"svelte-uascm8"}"><span class="${"name svelte-uascm8"}">Tim Smith</span>
			<span class="${"date svelte-uascm8"}">© ${escape(new Date().getFullYear())}</span></p></a>
	<section class="${"svelte-uascm8"}"><a href="${"https://linkedin.com/in/timsmith25"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"svelte-uascm8"}">LinkedIn</a>
		<a href="${"https://codepen.io/WebRuin"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"svelte-uascm8"}">CodePen</a></section>
</footer>`;
});
const Analytics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  {
    {
      if (typeof gtag !== "undefined") {
        gtag("config", "G-J59Q6MQ46K", {
          page_title: document.title,
          page_path: $page.url.pathname
        });
      }
    }
  }
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-9vyxlj_START --><script async src="${"https://www.googletagmanager.com/gtag/js?id=G-J59Q6MQ46K"}"><\/script><script>window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', 'MEASUREMENT_ID');
	<\/script><!-- HEAD_svelte-9vyxlj_END -->`, ""}`;
});
const app = "";
const print = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-wrapper.svelte-1o5foh{margin:0 auto;max-width:1200px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"page-wrapper svelte-1o5foh"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main>${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>

${validate_component(Analytics, "Analytics").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
