document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentDisplay = document.getElementById('content-display');
    const sidebar = document.querySelector('.doc-sidebar');
    const mobileBtn = document.querySelector('.mobile-menu-btn');

    // Initial Load
    loadPage('home.html');

    // Navigation Click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const fileName = link.getAttribute('data-file');

            // UI Updates
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            loadPage(fileName);

            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('show');
            }
        });
    });

    // Mobile Menu Toggle
    mobileBtn.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    function loadPage(fileName) {
        if (fileContent[fileName]) {
            // Render content (Simulated Markdown parsing for demonstration)
            contentDisplay.innerHTML = parseContent(fileContent[fileName], fileName);
        }
    }

    // Simple parser to make the raw content look like a documentation page
    function parseContent(content, fileName) {
        // Just wrapping code in tags for simple display
        // ideally you would use a markdown library like marked.js here

        let html = '';

        if (fileName.includes('.html')) {
            // Strip HTML tags for display or render them? 
            // For a doc site about code, usually we explain it.
            // But here let's make it look like a nice page.
            html = content.replace(/&lt;/g, '<').replace(/&gt;/g, '>');
            // Very basic cleanup to render the stored HTML string as actual HTML
        } else if (fileName.includes('.md')) {
            // Basic MD to HTML
            html = content
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^> (.*$)/gim, '<blockquote>$1</blockquote>')
                .replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
                .replace(/- (.*$)/gim, '<li>$1</li>')
                .replace(/\n/g, '<br>');
        } else {
            // Code block for JS/JSON/CSS
            html = `<h2>${fileName}</h2><pre>${content}</pre>`;
        }

        return html;
    }
});
