document.addEventListener('DOMContentLoaded', () => {

    // Select all file items (will pick up new ones from HTML)
    const fileItems = document.querySelectorAll('.tree-item.file');
    const contentDisplay = document.getElementById('content-display');
    const lineNumbers = document.querySelector('.line-numbers');
    const tabContainer = document.querySelector('.editor-tabs');

    // Folder toggle logic (Updated for multiple folders)
    const folderHeaders = document.querySelectorAll('.tree-item.folder .item-row');

    folderHeaders.forEach(header => {
        header.addEventListener('click', (e) => {
            const folder = header.parentElement;
            folder.classList.toggle('open');

            // Toggle icon
            const icon = header.querySelector('i');
            if (folder.classList.contains('open')) {
                icon.classList.remove('fa-chevron-right');
                icon.classList.add('fa-chevron-down');
            } else {
                icon.classList.remove('fa-chevron-down');
                icon.classList.add('fa-chevron-right');
            }
        });
    });

    // Initial Load
    loadFile('home.html');
    updateLineNumbers(fileContent['home.html']);

    // File Click Handler
    fileItems.forEach(item => {
        item.addEventListener('click', () => {
            const fileName = item.getAttribute('data-file');

            // UI Updates
            document.querySelectorAll('.tree-item.file').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            loadFile(fileName);
        });
    });

    function loadFile(fileName) {
        // Update Content
        if (fileContent[fileName]) {
            contentDisplay.innerHTML = `<pre><code>${fileContent[fileName]}</code></pre>`;
            updateLineNumbers(fileContent[fileName]);

            // Update Tabs
            updateTabs(fileName);

            // Update Status Bar
            const ext = fileName.split('.').pop().toUpperCase();
            const lang = document.querySelector('.status-right .status-item:nth-child(3)');
            if (lang) lang.textContent = ext === 'JS' ? 'JAVASCRIPT' : ext;
        }
    }

    function updateLineNumbers(content) {
        if (!content) return;
        const lines = content.split('\n').length;
        lineNumbers.innerHTML = '';
        for (let i = 1; i <= lines; i++) {
            const span = document.createElement('span');
            span.textContent = i;
            span.style.display = 'block';
            lineNumbers.appendChild(span);
        }
    }

    function updateTabs(activeFileName) {
        // Clear active state of existing tabs
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

        // Check if tab exists
        let existingTab = Array.from(document.querySelectorAll('.tab')).find(t => t.innerText.includes(activeFileName));

        if (existingTab) {
            existingTab.classList.add('active');
        } else {
            // Create new tab
            const newTab = document.createElement('div');
            newTab.className = 'tab active';
            newTab.innerHTML = `
                <i class="fab ${getIconClass(activeFileName)}"></i>
                <span>${activeFileName}</span>
                <i class="fas fa-times close-tab"></i>
            `;

            // Close tab handler
            newTab.querySelector('.close-tab').addEventListener('click', (e) => {
                e.stopPropagation(); // Prevent tab switching
                newTab.remove();
                // If closed active tab, switch to last one
                if (newTab.classList.contains('active') && tabContainer.children.length > 0) {
                    const lastTab = tabContainer.lastElementChild;
                    // Extract filename from tab text (cleaner way would be data attribute)
                    const filename = lastTab.querySelector('span').innerText;
                    loadFile(filename);
                }
            });

            // Click to switch
            newTab.addEventListener('click', () => loadFile(activeFileName));

            tabContainer.appendChild(newTab);
        }
    }

    function getIconClass(fileName) {
        if (fileName.includes('html')) return 'fa-html5 text-orange';
        if (fileName.includes('css')) return 'fa-css3-alt text-blue';
        if (fileName.includes('js')) return 'fa-js text-yellow';
        if (fileName.includes('md')) return 'fa-markdown text-blue-light';
        if (fileName.includes('json')) return 'fa-brackets-curly text-green';
        return 'fa-file';
    }
});
