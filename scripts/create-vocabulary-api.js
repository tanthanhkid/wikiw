// Script để tạo từ vựng - khái niệm thực tế
const fs = require('fs');
const path = require('path');

// Function để tạo slug từ tiếng Việt
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

// Function để tạo markdown content
function generateMarkdownContent(data) {
    const tagsYaml = data.tags.length > 0 ? `tags: [${data.tags.map(tag => `"${tag}"`).join(', ')}]` : 'tags: [""]';
    const categoriesYaml = data.categories.length > 0 ? `categories: [${data.categories.map(cat => `"${cat}"`).join(', ')}]` : 'categories: [""]';

    return `---
title: "${data.title}"
description: ""
date: ${data.date}
draft: false
weight: ${data.weight}
${tagsYaml}
${categoriesYaml}
---

# ${data.title}

<!-- **Mã:** 
**Nhóm:**  -->

## Khái Niệm

${data.content}`;
}

// Function để tạo file từ vựng
function createVocabularyFile(vocabularyData) {
    const contentDir = path.join(__dirname, '..', 'content', 'TU-KHAINIEM');
    const vocabularyDir = path.join(contentDir, vocabularyData.slug);
    const indexPath = path.join(vocabularyDir, '_index.md');
    
    try {
        // Create directory if it doesn't exist
        if (!fs.existsSync(vocabularyDir)) {
            fs.mkdirSync(vocabularyDir, { recursive: true });
            console.log(`✅ Created directory: ${vocabularyDir}`);
        }
        
        // Generate markdown content
        const markdownContent = generateMarkdownContent(vocabularyData);
        
        // Write file
        fs.writeFileSync(indexPath, markdownContent, 'utf8');
        console.log(`✅ Created file: ${indexPath}`);
        
        return true;
    } catch (error) {
        console.error(`❌ Error creating vocabulary file:`, error.message);
        return false;
    }
}

// Function để cập nhật main index
function updateMainIndex(vocabularyData) {
    const indexPath = path.join(__dirname, '..', 'content', 'TU-KHAINIEM', '_index.md');
    
    try {
        if (!fs.existsSync(indexPath)) {
            console.log(`❌ Main index file not found: ${indexPath}`);
            return false;
        }
        
        let content = fs.readFileSync(indexPath, 'utf8');
        
        // Find the table and add new row
        const tableRow = `|| [${vocabularyData.title}](${vocabularyData.slug}/) | ${vocabularyData.content.substring(0, 50)}... |`;
        
        // Insert before the closing </div> tag
        const insertPoint = content.lastIndexOf('</div>');
        if (insertPoint !== -1) {
            const newContent = content.slice(0, insertPoint) + tableRow + '\n' + content.slice(insertPoint);
            fs.writeFileSync(indexPath, newContent, 'utf8');
            console.log(`✅ Updated main index file`);
            return true;
        } else {
            console.log(`❌ Could not find insertion point in main index`);
            return false;
        }
        
    } catch (error) {
        console.error(`❌ Error updating main index:`, error.message);
        return false;
    }
}

// Main function để tạo từ vựng
function createVocabulary(title, content, tags = [], categories = []) {
    console.log('🧪 Creating Vocabulary via API');
    console.log('==============================');
    
    const vocabularyData = {
        title: title,
        slug: generateSlug(title),
        content: content,
        tags: tags,
        categories: categories,
        date: new Date().toISOString().split('T')[0],
        weight: 59
    };
    
    console.log('📝 Vocabulary Data:', vocabularyData);
    
    // Create vocabulary file
    const fileCreated = createVocabularyFile(vocabularyData);
    if (!fileCreated) {
        console.log('❌ Failed to create vocabulary file');
        return false;
    }
    
    // Update main index
    const indexUpdated = updateMainIndex(vocabularyData);
    if (!indexUpdated) {
        console.log('❌ Failed to update main index');
        return false;
    }
    
    console.log('🎉 Vocabulary created successfully!');
    console.log(`📁 File: content/TU-KHAINIEM/${vocabularyData.slug}/_index.md`);
    console.log(`🔗 URL: /tu-khainiem/${vocabularyData.slug}/`);
    
    return vocabularyData;
}

// Export functions
module.exports = {
    generateSlug,
    generateMarkdownContent,
    createVocabularyFile,
    updateMainIndex,
    createVocabulary
};

// If this file is run directly, create a test vocabulary
if (require.main === module) {
    const testVocabulary = createVocabulary(
        "Bai Hoc Test",
        "Đây là bài học test được tạo qua API. Nội dung này sẽ được lưu trong file _index.md và có thể truy cập qua URL.",
        ["test", "api", "bai-hoc"],
        ["test-category", "api-test"]
    );
    
    if (testVocabulary) {
        console.log('\n✅ Test completed successfully!');
        console.log('You can now access the vocabulary at:');
        console.log(`http://localhost:1313/tu-khainiem/${testVocabulary.slug}/`);
    }
}
