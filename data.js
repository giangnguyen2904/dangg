const fileContent = {
  "home.html": `&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
  &lt;h1&gt;Hi, I'm <span class="string">"Giang Nguyen"</span>&lt;/h1&gt;
  &lt;h2&gt;Web Developer & Designer&lt;/h2&gt;
  &lt;p&gt;
    Welcome to my portfolio! I build accessible, 
    pixel-perfect, and performant web experiences.
  &lt;/p&gt;
  &lt;!-- <span class="comment">Feel free to explore the files in the sidebar!</span> --&gt;
  &lt;button&gt;Contact Me&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;`,

  "about.css": `.about-me {
  <span class="attr">name</span>: <span class="string">"Giang Nguyen"</span>;
  <span class="attr">role</span>: <span class="string">"Full Stack Developer"</span>;
  <span class="attr">location</span>: <span class="string">"Vietnam"</span>;
  <span class="attr">hobbies</span>: [<span class="string">"Coding"</span>, <span class="string">"Music"</span>, <span class="string">"Coffee"</span>];
}

.skills {
  <span class="attr">frontend</span>: <span class="string">"HTML, CSS, JS, React"</span>;
  <span class="attr">backend</span>: <span class="string">"Node.js, Express, MongoDB"</span>;
}
`,

  "skills.js": `const <span class="def">skills</span> = {
  <span class="attr">languages</span>: [<span class="string">'JavaScript'</span>, <span class="string">'Python'</span>, <span class="string">'HTML/CSS'</span>],
  <span class="attr">frameworks</span>: [<span class="string">'React'</span>, <span class="string">'Vue'</span>, <span class="string">'Next.js'</span>],
  <span class="attr">tools</span>: [<span class="string">'Git'</span>, <span class="string">'Docker'</span>, <span class="string">'Figma'</span>],
  <span class="attr">level</span>: <span class="string">'Advanced'</span>
};

function <span class="def">deployProject</span>() {
  return <span class="keyword">true</span>;
}
`,

  "projects.md": `# My Projects

## 1. Dangg Portfolio
> A VS Code styled portfolio website.
- **Tech**: HTML, CSS, JS
- **Link**: [Demo](https://giangnguyen2904.github.io/dangg)

## 2. E-commerce App
> Full stack shopping platform.
- **Tech**: React, Node.js, MongoDB

<!-- <span class="comment">Click any file to view details</span> -->
`,

  "contact.json": `{
  <span class="attr">"email"</span>: <span class="string">"contact@example.com"</span>,
  <span class="attr">"github"</span>: <span class="string">"github.com/giangnguyen2904"</span>,
  <span class="attr">"phone"</span>: <span class="string">"+84 123 456 789"</span>,
  <span class="attr">"status"</span>: <span class="string">"Open to work"</span>
}`,

  "introduction.md": `# Where Winds Meet (WWM)
> Tổng hợp các công cụ và tài liệu về WWM.

Tại đây mình chia sẻ:
- Tool dịch thuật
- Các bản mod/preset
- Hướng dẫn tân thủ

<!-- <span class="comment">Chọn file downloads.json để tải tool</span> -->
`,

  "downloads.json": `{
  <span class="comment">// Danh sách tool do mình phát triển</span>
  <span class="attr">"TranslationTool"</span>: {
    <span class="attr">"version"</span>: <span class="string">"v1.0.2"</span>,
    <span class="attr">"link"</span>: <span class="string">"https://github.com/giangnguyen2904/dangg/releases"</span>
  },
  <span class="attr">"PresetManager"</span>: {
    <span class="attr">"version"</span>: <span class="string">"beta"</span>,
    <span class="attr">"status"</span>: <span class="string">"Coming Soon"</span>
  }
}`,

  "guides.js": `// Hướng dẫn cơ bản

function <span class="def">caiDatGame</span>() {
  console.log(<span class="string">"1. Tải launcher từ trang chủ"</span>);
  console.log(<span class="string">"2. Cài đặt và update"</span>);
  console.log(<span class="string">"3. Dùng tool dịch tiếng Việt"</span>);
}

// Xem thêm tại kênh Discord của mình!
`
};
