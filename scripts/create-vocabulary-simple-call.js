// Simple script to create vocabulary - can be called from JavaScript
const fs = require('fs');
const path = require('path');

// Get data from command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Usage: node create-vocabulary-simple-call.js "Title" "Content" [tags] [categories]');
    process.exit(1);
}

const title = args[0];
const content = args[1];
const tags = args[2] ? args[2].split(',').map(t => t.trim()) : [];
const categories = args[3] ? args[3].split(',').map(c => c.trim()) : [];

// Generate slug
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

const slug = generateSlug(title);
const date = new Date().toISOString().split('T')[0];

try {
    // Create directory
    const dirPath = path.join('content', 'TU-KHAINIEM', slug);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
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
    }
    
    // Output success
    console.log('SUCCESS');
    console.log('TITLE:', title);
    console.log('SLUG:', slug);
    console.log('URL:', `/tu-khainiem/${slug}/`);
    
} catch (error) {
    console.error('ERROR:', error.message);
    process.exit(1);
}
