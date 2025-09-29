// Test script for vocabulary creation functionality
const fs = require('fs');
const path = require('path');

// Test data
const testVocabulary = {
    title: "Test Từ Vựng - Khái Niệm",
    slug: "test-tu-vung-khai-niem",
    content: "Đây là nội dung test cho từ vựng - khái niệm mới. Nội dung này sẽ được lưu trong file _index.md.",
    tags: ["test", "vocabulary"],
    categories: ["test-category"],
    date: "2025-01-27",
    weight: 59
};

// Function to generate markdown content (same as in vocabulary-generator.js)
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

// Function to create vocabulary folder and file
function createVocabularyFile(vocabularyData) {
    const contentDir = path.join(__dirname, '..', 'content', 'TU-KHAINIEM');
    const vocabularyDir = path.join(contentDir, vocabularyData.slug);
    const indexPath = path.join(vocabularyDir, '_index.md');
    
    try {
        // Create directory if it doesn't exist
        if (!fs.existsSync(vocabularyDir)) {
            fs.mkdirSync(vocabularyDir, { recursive: true });
            console.log(`✅ Created directory: ${vocabularyDir}`);
        } else {
            console.log(`📁 Directory already exists: ${vocabularyDir}`);
        }
        
        // Generate markdown content
        const markdownContent = generateMarkdownContent(vocabularyData);
        
        // Write file
        fs.writeFileSync(indexPath, markdownContent, 'utf8');
        console.log(`✅ Created file: ${indexPath}`);
        
        // Verify file was created
        if (fs.existsSync(indexPath)) {
            const content = fs.readFileSync(indexPath, 'utf8');
            console.log(`📄 File content preview:`);
            console.log(content.substring(0, 200) + '...');
            return true;
        } else {
            console.log(`❌ File was not created successfully`);
            return false;
        }
        
    } catch (error) {
        console.error(`❌ Error creating vocabulary file:`, error.message);
        return false;
    }
}

// Function to update main TU-KHAINIEM index
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

// Main test function
function runTest() {
    console.log('🧪 Testing Vocabulary Creation Functionality');
    console.log('==========================================');
    
    // Test 1: Create vocabulary file
    console.log('\n📝 Test 1: Creating vocabulary file...');
    const fileCreated = createVocabularyFile(testVocabulary);
    
    if (fileCreated) {
        console.log('✅ Test 1 PASSED: Vocabulary file created successfully');
    } else {
        console.log('❌ Test 1 FAILED: Could not create vocabulary file');
        return;
    }
    
    // Test 2: Update main index
    console.log('\n📋 Test 2: Updating main index...');
    const indexUpdated = updateMainIndex(testVocabulary);
    
    if (indexUpdated) {
        console.log('✅ Test 2 PASSED: Main index updated successfully');
    } else {
        console.log('❌ Test 2 FAILED: Could not update main index');
    }
    
    // Test 3: Verify file structure
    console.log('\n🔍 Test 3: Verifying file structure...');
    const vocabularyDir = path.join(__dirname, '..', 'content', 'TU-KHAINIEM', testVocabulary.slug);
    const indexPath = path.join(vocabularyDir, '_index.md');
    
    if (fs.existsSync(vocabularyDir) && fs.existsSync(indexPath)) {
        console.log('✅ Test 3 PASSED: File structure is correct');
        
        // Read and display the created file
        const content = fs.readFileSync(indexPath, 'utf8');
        console.log('\n📄 Created file content:');
        console.log('========================');
        console.log(content);
        
    } else {
        console.log('❌ Test 3 FAILED: File structure is incorrect');
    }
    
    console.log('\n🎉 Test completed!');
    console.log(`📁 Created vocabulary: ${testVocabulary.slug}`);
    console.log(`🔗 URL: /tu-khainiem/${testVocabulary.slug}/`);
}

// Run the test
if (require.main === module) {
    runTest();
}

module.exports = {
    generateMarkdownContent,
    createVocabularyFile,
    updateMainIndex,
    runTest
};
