import { RESUME_PDF_URL } from './urls';

export { RESUME_PDF_URL };

export interface SiteFile {
	id: string;
	filename: string;
	icon: string;
	iconColor: string;
	content: string;
	externalUrl?: string;
}

/** Wraps an array of line strings into editor-line divs with line numbers */
function lines(content: string[]): string {
	return content
		.map(
			(line, i) =>
				`<div class="editor-line"><span class="ln">${i + 1}</span><span class="lc">${line || '&nbsp;'}</span></div>`,
		)
		.join('');
}

export const siteFiles: SiteFile[] = [
	{
		id: 'home',
		filename: 'home.md',
		icon: 'file-text',
		iconColor: 'var(--color-skyBlue)',
		content: lines([
			`<span class="syn-heading"># Marlon Ausby II</span>`,
			``,
			`<span class="syn-heading">## Solving problems with code and design</span>`,
			``,
			`<span class="syn-bold">**Status:**</span> Continuously Seeking`,
			``,
			`I'm a problem solver with a passion for building`,
			`solutions that are not only functional, but also`,
			`intuitive.`,
			``,
			`<span class="syn-hr">---</span>`,
			``,
			`<span class="syn-heading">## About Me</span>`,
			``,
			`Full-stack developer focused on creating elegant,`,
			`performant web applications. Driven by curiosity`,
			`and a commitment to clean, maintainable code.`,
			``,
			`<span class="syn-heading">## What I Do</span>`,
			``,
			`<span class="syn-list">-</span> <span class="syn-bold">Design</span> — Crafting intuitive interfaces`,
			`<span class="syn-list">-</span> <span class="syn-bold">Develop</span> — Building robust applications`,
			`<span class="syn-list">-</span> <span class="syn-bold">Deploy</span> — Shipping to production`,
		]),
	},
	{
		id: 'experience',
		filename: 'experience.ts',
		icon: 'code',
		iconColor: '#3a86ff',
		content: lines([
			`<span class="syn-kw">type</span> <span class="syn-type">Experience</span> <span class="syn-op">=</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-type">string</span><span class="syn-punc">[];</span>`,
			`<span class="syn-punc">};</span>`,
			``,
			`<span class="syn-cmt">// Professional experience</span>`,
			`<span class="syn-kw">const</span> <span class="syn-var">experience</span><span class="syn-punc">:</span> <span class="syn-type">Experience</span><span class="syn-punc">[]</span> <span class="syn-op">=</span> <span class="syn-punc">[</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"Full Stack Developer"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"Company Name"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2023 — Present"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Built and deployed web applications using modern frameworks"</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Designed and implemented RESTful APIs and microservices"</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Collaborated with cross-functional teams on product features"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`  <span class="syn-punc">{</span>`,
			`    <span class="syn-prop">role</span><span class="syn-punc">:</span> <span class="syn-str">"Frontend Developer"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">company</span><span class="syn-punc">:</span> <span class="syn-str">"Previous Company"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">period</span><span class="syn-punc">:</span> <span class="syn-str">"2021 — 2023"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-prop">highlights</span><span class="syn-punc">:</span> <span class="syn-punc">[</span>`,
			`      <span class="syn-str">"Developed responsive UI components with React and TypeScript"</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Improved application performance and reduced load times by 40%"</span><span class="syn-punc">,</span>`,
			`      <span class="syn-str">"Mentored junior developers and conducted code reviews"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-punc">],</span>`,
			`  <span class="syn-punc">},</span>`,
			`<span class="syn-punc">];</span>`,
			``,
			`<span class="syn-kw">export default</span> <span class="syn-var">experience</span><span class="syn-punc">;</span>`,
		]),
	},
	{
		id: 'education',
		filename: 'education.css',
		icon: 'palette',
		iconColor: '#ff8fab',
		content: lines([
			`<span class="syn-cmt">/* Education & Certifications */</span>`,
			``,
			`<span class="syn-sel">.degree</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">--title</span><span class="syn-punc">:</span> <span class="syn-str">"Bachelor of Science in Computer Science"</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">--institution</span><span class="syn-punc">:</span> <span class="syn-str">"University Name"</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">--graduation</span><span class="syn-punc">:</span> <span class="syn-str">"2023"</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">--gpa</span><span class="syn-punc">:</span> <span class="syn-str">"3.8 / 4.0"</span><span class="syn-punc">;</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-sel">.degree</span><span class="syn-sel">::before</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">content</span><span class="syn-punc">:</span> <span class="syn-fn">var</span><span class="syn-punc">(</span><span class="syn-prop">--title</span><span class="syn-punc">)</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">font-weight</span><span class="syn-punc">:</span> <span class="syn-val">bold</span><span class="syn-punc">;</span>`,
			`  <span class="syn-prop">color</span><span class="syn-punc">:</span> <span class="syn-val">#69D7F2</span><span class="syn-punc">;</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt">/* Relevant coursework */</span>`,
			`<span class="syn-sel">.coursework</span> <span class="syn-punc">{</span>`,
			`  <span class="syn-prop">--courses</span><span class="syn-punc">:</span>`,
			`    <span class="syn-str">"Data Structures &amp; Algorithms"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Software Engineering"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Database Systems"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Web Development"</span><span class="syn-punc">,</span>`,
			`    <span class="syn-str">"Operating Systems"</span><span class="syn-punc">;</span>`,
			`<span class="syn-punc">}</span>`,
			``,
			`<span class="syn-cmt">/* Certifications */</span>`,
			`<span class="syn-sel">.certifications</span> <span class="syn-punc">{</span>`,
			`<span class="syn-prop">list-style</span><span class="syn-punc">:</span> <span class="syn-val">none</span><span class="syn-punc">;</span>`,
			`<span class="syn-cmt">/* Add your certifications here */</span>`,
			`<span class="syn-punc">}</span>`,
		]),
	},
	{
		id: 'projects',
		filename: 'projects.sql',
		icon: 'sql',
		iconColor: '#ffbe0b',
		content: lines([
			`<span class="syn-cmt">-- Featured Projects</span>`,
			`<span class="syn-cmt">-- Querying all projects by Marlon Ausby II</span>`,
			``,
			`<span class="syn-kw">SELECT</span>`,
			`	<span class="syn-var">p.name</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">p.description</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">p.tech_stack</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">p.live_url</span>`,
			`	<span class="syn-var">d.name</span> <span class="syn-kw">AS</span> <span class="syn-prop">'developer'</span><span class="syn-punc">,</span>`,
			`	<span class="syn-var">o.name</span> <span class="syn-kw">AS</span> <span class="syn-prop">'organization'</span><span class="syn-punc">,</span>`,
			`<span class="syn-kw">FROM</span> <span class="syn-var">projects</span> <span class="syn-kw">AS</span> <span class="syn-str">p</span>`,
			`	<span class="syn-kw">JOIN</span> <span class="syn-var">developers</span> <span class="syn-kw">AS</span> <span class="syn-str">d</span> <span class="syn-kw">ON</span> <span class="syn-var">p.developer_id</span> <span class="syn-op">=</span> <span class="syn-var">d.id</span>`,
			`	<span class="syn-kw">JOIN</span> <span class="syn-var">organizations</span> <span class="syn-kw">AS</span> <span class="syn-str">o</span> <span class="syn-kw">ON</span> <span class="syn-var">p.organization_id</span> <span class="syn-op">=</span> <span class="syn-var">o.id</span>`,
			`<span class="syn-kw">WHERE</span> <span class="syn-var">p.developer_id</span> <span class="syn-op">=</span> <span class="syn-val">1</span>`,
			`	<span class="syn-kw">AND</span> <span class="syn-var">p.live</span> <span class="syn-op">=</span> <span class="syn-val">true</span>`,
			`<span class="syn-kw">ORDER BY</span> <span class="syn-var">name</span> <span class="syn-kw">ASC</span><span class="syn-punc">;</span>`,
			``,
			`<span class="syn-cmt">-- Query returned 3 rows</span>`,
		])
		+ `<div class="sql-results">
			<table class="sql-table">
				<thead>
					<tr>
						<th>name</th>
						<th>description</th>
						<th>tech_stack</th>
						<th>live_url</th>
						<th>developer</th>
						<th>organization</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>marlonii-web-suite</td>
						<td>Personal portfolio websites</td>
						<td>Astro, TypeScript, Tailwind</td>
						<td><a href="#">marlonii.com</a></td>
						<td>Marlon Ausby II</td>
						<td>By Marlon II</td>
					</tr>
					<tr>
						<td>the-bible-api</td>
						<td>Open Source scripture study tools</td>
						<td>Flutter, Go, PostgreSQL</td>
						<td><a href="#">docs.scripturecommons.com</a></td>
						<td>Marlon Ausby II</td>
						<td>Scripture Commons</td>
					</tr>
					<tr>
						<td>go-fomu</td>
						<td>Form builder for agile teams</td>
						<td>Ruby, Rails, SQLite</td>
						<td><a href="#">gofomu.com</a></td>
						<td>Marlon Ausby II</td>
						<td>The 7th Lab</td>
					</tr>
					<tr>
						<td>project-three</td>
						<td>Another great project</td>
						<td>Python, Flask, Redis</td>
						<td><a href="#">live-link.com</a></td>
						<td>Marlon Ausby II</td>
						<td> By Marlon II</td>
					</tr>
					<tr>
						<td>project-three</td>
						<td>Another great project</td>
						<td>Python, Flask, Redis</td>
						<td><a href="#">live-link.com</a></td>
						<td>Marlon Ausby II</td>
						<td> By Marlon II</td>
					</tr>
				</tbody>
			</table>
			<div class="sql-footer">(3 rows)</div>
		</div>`,
	},
	{
		id: 'contact',
		filename: 'contact.html',
		icon: 'globe',
		iconColor: '#ffe6a7',
		content: lines([
			`<span class="syn-cmt">&lt;!-- Let's connect! --&gt;</span>`,
			`<span class="syn-tag">&lt;section</span> <span class="syn-attr">id</span><span class="syn-op">=</span><span class="syn-str">"contact"</span><span class="syn-tag">&gt;</span>`,
			`  <span class="syn-tag">&lt;h1&gt;</span>Get In Touch<span class="syn-tag">&lt;/h1&gt;</span>`,
			`  <span class="syn-tag">&lt;p&gt;</span>`,
			`    I'm always open to new opportunities and`,
			`    interesting projects. Feel free to reach out!`,
			`  <span class="syn-tag">&lt;/p&gt;</span>`,
			``,
			`  <span class="syn-tag">&lt;ul</span> <span class="syn-attr">class</span><span class="syn-op">=</span><span class="syn-str">"contact-links"</span><span class="syn-tag">&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>Email:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"mailto:hello@marlonii.com"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">hello@marlonii.com</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>GitHub:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://github.com/marlonii"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">github.com/marlonii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`    <span class="syn-tag">&lt;li&gt;</span>`,
			`      <span class="syn-tag">&lt;strong&gt;</span>LinkedIn:<span class="syn-tag">&lt;/strong&gt;</span>`,
			`      <span class="syn-tag">&lt;a</span> <span class="syn-attr">href</span><span class="syn-op">=</span><span class="syn-str">"https://linkedin.com/in/marlonii"</span> <span class="syn-attr">target</span><span class="syn-op">=</span><span class="syn-str">"_blank"</span><span class="syn-tag">&gt;</span>`,
			`        <span class="syn-val">linkedin.com/in/marlonii</span>`,
			`      <span class="syn-tag">&lt;/a&gt;</span>`,
			`    <span class="syn-tag">&lt;/li&gt;</span>`,
			`  <span class="syn-tag">&lt;/ul&gt;</span>`,
			`<span class="syn-tag">&lt;/section&gt;</span>`,
		]),
	},
	{
		id: 'resume',
		filename: 'resume.pdf',
		icon: 'download-file',
		iconColor: 'var(--color-vermilion)',
		externalUrl: RESUME_PDF_URL,
		content: lines([
			`<span class="syn-cmt">// resume.pdf</span>`,
			``,
			`<a href="${RESUME_PDF_URL}" target="_blank" rel="noopener noreferrer" style="color: var(--color-skyBlue); text-decoration: underline; text-underline-offset: 3px;">Open PDF in new tab →</a>`,
		]),
	},
];

export function getFileById(id: string | null): SiteFile {
	return siteFiles.find((f) => f.id === id) || siteFiles[0];
}
