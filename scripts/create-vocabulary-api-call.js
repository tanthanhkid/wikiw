// Script to create vocabulary via API call simulation
const { createVocabulary } = require('../public/api/create-vocabulary.js');

// Get data from command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error('Usage: node create-vocabulary-api-call.js "Title" "Content" [tags] [categories]');
    process.exit(1);
}

const title = args[0];
const content = args[1];
const tags = args[2] ? args[2].split(',').map(t => t.trim()) : [];
const categories = args[3] ? args[3].split(',').map(c => c.trim()) : [];

console.log('🚀 Creating vocabulary via API call...');
console.log('📝 Title:', title);
console.log('📄 Content:', content);
console.log('🏷️ Tags:', tags);
console.log('📂 Categories:', categories);

const result = createVocabulary({
    title: title,
    content: content,
    tags: tags,
    categories: categories
});

if (result.success) {
    console.log('✅ Success!');
    console.log('📁 File:', result.data.filePath);
    console.log('🔗 URL:', result.data.url);
} else {
    console.error('❌ Error:', result.error);
    process.exit(1);
}
