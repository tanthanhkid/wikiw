// API endpoint to create vocabulary
const fs = require('fs');
const path = require('path');

// This would be called by a server-side script
// For now, we'll create a simple HTML file that can handle the request

console.log('Creating vocabulary API endpoint...');

// Generate slug function
function generateSlug(title) {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim('-'); // Remove leading/trailing hyphens
}

// Create vocabulary function
function createVocabulary(data) {
    const { title, content, tags = [], categories = [] } = data;
    const slug = generateSlug(title);
    const date = new Date().toISOString().split('T')[0];
    
    console.log('Creating vocabulary:', title);
    console.log('Slug:', slug);
    
    try {
        // Create directory
        const dirPath = path.join('content', 'TU-KHAINIEM', slug);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
            console.log('Created directory:', dirPath);
        }
        
        // Generate markdown content
        const tagsYaml = tags.length > 0 ? `tags: [${tags.map(tag => `"${tag}"`).join(', ')}]` : 'tags: [""]';
        const categoriesYaml = categories.length > 0 ? `categories: [${categories.map(cat => `"${cat}"`).join(', ')}]` : 'categories: [""]';
        
        const markdownContent = `---
title: "${title}"
description: ""
date: ${date}
draft: false
weight: 59
${tagsYaml}
${categoriesYaml}
---

# ${title}

<!-- **Mã:** 
**Nhóm:**  -->

## Khái Niệm

${content}`;
        
        // Create _index.md file
        const filePath = path.join(dirPath, '_index.md');
        fs.writeFileSync(filePath, markdownContent, 'utf8');
        console.log('Created file:', filePath);
        
        // Update main index file
        const mainIndexPath = path.join('content', 'TU-KHAINIEM', '_index.md');
        let mainContent = fs.readFileSync(mainIndexPath, 'utf8');
        
        // Find the last entry in the table and add new entry
        const lastEntryPattern = /\|\| \[([^\]]+)\]\(([^)]+)\) \| ([^|]*?) \|/g;
        let lastMatch;
        let lastEntry = '';
        
        while ((lastMatch = lastEntryPattern.exec(mainContent)) !== null) {
            lastEntry = lastMatch[0];
        }
        
        if (lastEntry) {
            const newEntry = `|| [${title}](${slug}/) | ${content.substring(0, 100)}... |`;
            mainContent = mainContent.replace(lastEntry, lastEntry + '\n' + newEntry);
            fs.writeFileSync(mainIndexPath, mainContent, 'utf8');
            console.log('Updated main index file');
        }
        
        return {
            success: true,
            data: {
                title: title,
                slug: slug,
                filePath: filePath,
                url: `/tu-khainiem/${slug}/`
            }
        };
        
    } catch (error) {
        console.error('Error creating vocabulary:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { createVocabulary, generateSlug };
}