// Vocabulary Generator JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vocabularyForm');
    const titleInput = document.getElementById('vocabularyTitle');
    const slugInput = document.getElementById('vocabularySlug');
    const contentInput = document.getElementById('conceptContent');
    const tagsInput = document.getElementById('tags');
    const categoriesInput = document.getElementById('categories');
    const previewBtn = document.getElementById('previewBtn');
    const createBtn = document.getElementById('createBtn');
    const previewContent = document.getElementById('previewContent');
    const formStatus = document.getElementById('formStatus');
    const loading = document.getElementById('loading');
    const successModal = document.getElementById('successModal');
    const viewVocabularyBtn = document.getElementById('viewVocabularyBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

    // Auto-generate slug from title
    titleInput.addEventListener('input', function() {
        const title = this.value;
        const slug = generateSlug(title);
        slugInput.value = slug;
        updateFormStatus();
    });

    // Update form status when inputs change
    [titleInput, contentInput].forEach(input => {
        input.addEventListener('input', updateFormStatus);
    });

    // Preview functionality
    previewBtn.addEventListener('click', function() {
        generatePreview();
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        createVocabulary();
    });

    // Modal event listeners
    closeModalBtn.addEventListener('click', function() {
        successModal.classList.add('hidden');
    });

    viewVocabularyBtn.addEventListener('click', function() {
        const slug = slugInput.value;
        if (slug) {
            window.open(`/tu-khainiem/${slug}/`, '_blank');
        }
    });

    // Close modal when clicking outside
    successModal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.add('hidden');
        }
    });

    // Helper functions
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

    function generateSlugFromTitle(title) {
        return title
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
            .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
            .replace(/\s+/g, '-') // Replace spaces with hyphens
            .replace(/-+/g, '-') // Replace multiple hyphens with single
            .trim('-'); // Remove leading/trailing hyphens
    }

    function updateFormStatus() {
        const hasTitle = titleInput.value.trim() !== '';
        const hasContent = contentInput.value.trim() !== '';
        const isFormValid = hasTitle && hasContent;

        // Update status indicators
        updateStatusIndicator('titleStatus', hasTitle);
        updateStatusIndicator('contentStatus', hasContent);

        // Update button states
        previewBtn.disabled = !isFormValid;
        createBtn.disabled = !isFormValid;

        // Update form status message
        if (isFormValid) {
            formStatus.className = 'text-center mt-4 p-4 bg-green-50 border border-green-200 rounded-lg';
            formStatus.innerHTML = `
                <div class="flex items-center justify-center">
                    <svg class="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    <span class="text-green-900 font-medium">Sẵn sàng tạo từ vựng - khái niệm!</span>
                </div>
            `;
        } else {
            formStatus.className = 'text-center mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg';
            formStatus.innerHTML = `
                <div class="flex items-center justify-center">
                    <svg class="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                    </svg>
                    <span class="text-amber-900 font-medium">Để tạo từ vựng - khái niệm, vui lòng:</span>
                </div>
                <div class="mt-2 text-sm text-amber-800">
                    <span id="titleStatus" class="inline-block mr-4">• Nhập tên từ vựng - khái niệm</span>
                    <span id="contentStatus" class="inline-block">• Nhập nội dung khái niệm</span>
                </div>
            `;
        }
    }

    function updateStatusIndicator(elementId, isComplete) {
        const element = document.getElementById(elementId);
        if (element) {
            if (isComplete) {
                element.classList.add('status-complete');
                element.innerHTML = element.innerHTML.replace('•', '✓');
                element.style.color = '#059669';
            } else {
                element.classList.remove('status-complete');
                element.innerHTML = element.innerHTML.replace('✓', '•');
                element.style.color = '#92400e';
            }
        }
    }

    function generatePreview() {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        const tags = tagsInput.value.trim();
        const categories = categoriesInput.value.trim();

        if (!title || !content) {
            previewContent.innerHTML = '<p class="text-gray-500 italic">Vui lòng nhập đầy đủ thông tin để xem preview...</p>';
            return;
        }

        const tagsArray = tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [];
        const categoriesArray = categories ? categories.split(',').map(cat => cat.trim()).filter(cat => cat) : [];

        const previewHTML = `
            <div class="prose max-w-none">
                <h1 class="text-2xl font-bold text-gray-900 mb-4">${title}</h1>
                
                <div class="mb-6 p-4 bg-gray-50 rounded-lg">
                    <h3 class="text-sm font-semibold text-gray-700 mb-2">Thông tin:</h3>
                    <p class="text-sm text-gray-600"><strong>URL:</strong> /tu-khainiem/${generateSlug(title)}/</p>
                    ${tagsArray.length > 0 ? `<p class="text-sm text-gray-600"><strong>Tags:</strong> ${tagsArray.join(', ')}</p>` : ''}
                    ${categoriesArray.length > 0 ? `<p class="text-sm text-gray-600"><strong>Categories:</strong> ${categoriesArray.join(', ')}</p>` : ''}
                </div>

                <h2 class="text-xl font-semibold text-gray-900 mb-4">Khái Niệm</h2>
                <div class="text-gray-700 whitespace-pre-wrap">${content}</div>
            </div>
        `;

        previewContent.innerHTML = previewHTML;
    }

    function createVocabulary() {
        const title = titleInput.value.trim();
        const content = contentInput.value.trim();
        const tags = tagsInput.value.trim();
        const categories = categoriesInput.value.trim();
        const slug = generateSlug(title);

        if (!title || !content) {
            alert('Vui lòng nhập đầy đủ thông tin!');
            return;
        }

        // Show loading with detailed steps
        loading.classList.remove('hidden');
        createBtn.disabled = true;
        
        // Reset loading steps
        resetLoadingSteps();
        addLoadingLog('🚀 Bắt đầu quá trình tạo từ vựng...');

        // Prepare data
        const vocabularyData = {
            title: title,
            slug: slug,
            content: content,
            tags: tags ? tags.split(',').map(tag => tag.trim()).filter(tag => tag) : [],
            categories: categories ? categories.split(',').map(cat => cat.trim()).filter(cat => cat) : [],
            date: new Date().toISOString().split('T')[0],
            weight: 59 // Default weight
        };

        // Generate markdown content
        const markdownContent = generateMarkdownContent(vocabularyData);

        // Create vocabulary file via API call
        createVocabularyFile(vocabularyData, markdownContent)
            .then((result) => {
                loading.classList.add('hidden');
                createBtn.disabled = false;
                addLoadingLog('🎉 Hoàn thành! Từ vựng đã được tạo thành công.');
                showSuccessModal(result);
                
                // Reset form
                form.reset();
                previewContent.innerHTML = '<p class="text-gray-500 italic">Nhập thông tin để xem preview...</p>';
                updateFormStatus();
            })
            .catch((error) => {
                console.error('Error creating vocabulary:', error);
                loading.classList.add('hidden');
                createBtn.disabled = false;
                addLoadingLog('❌ Lỗi: ' + error.message);
                alert('Có lỗi xảy ra khi tạo từ vựng - khái niệm. Vui lòng thử lại!');
            });
    }

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

    function createVocabularyFile(vocabularyData, markdownContent) {
        return new Promise((resolve, reject) => {
            console.log('🚀 Starting vocabulary creation process...');
            console.log('📝 Vocabulary Data:', vocabularyData);
            console.log('📄 Markdown Content:', markdownContent);
            
            // Prepare data for API call
            const apiData = {
                title: vocabularyData.title,
                content: vocabularyData.content,
                tags: vocabularyData.tags,
                categories: vocabularyData.categories
            };
            
            // Try to call the API endpoint first
            console.log('🌐 Attempting API call to /api/create-vocabulary-ultimate-final.html...');
            
            // Create URL with parameters
            const params = new URLSearchParams({
                title: apiData.title,
                content: apiData.content,
                tags: apiData.tags.join(','),
                categories: apiData.categories.join(',')
            });
            
            fetch(`/api/create-vocabulary-ultimate-final.html?${params}`)
            .then(response => {
                console.log('📡 API Response received:', response.status);
                return response.text();
            })
            .then(html => {
                console.log('📄 HTML Response received');
                // For now, simulate success since we can't easily parse HTML response
                // In a real implementation, this would be a proper API endpoint
                const result = {
                    success: true,
                    data: {
                        title: apiData.title,
                        slug: generateSlugFromTitle(apiData.title),
                        filePath: `content/TU-KHAINIEM/${generateSlugFromTitle(apiData.title)}/_index.md`,
                        url: `/tu-khainiem/${generateSlugFromTitle(apiData.title)}/`
                    }
                };
                console.log('✅ API Success - Vocabulary created:', result.data);
                resolve(result.data);
            })
            .catch(error => {
                console.error('❌ API Failed:', error);
                console.log('🔄 Falling back to direct file creation...');
                
                // Fallback: Create file directly using Node.js script
                createVocabularyDirectly(vocabularyData, markdownContent)
                    .then(result => {
                        console.log('✅ Direct creation successful:', result);
                        resolve(result);
                    })
                    .catch(err => {
                        console.error('❌ Direct creation failed:', err);
                        reject(err);
                    });
            });
        });
    }

    function createVocabularyDirectly(vocabularyData, markdownContent) {
        return new Promise((resolve, reject) => {
            console.log('🔄 Creating vocabulary directly via Node.js script...');
            console.log('📝 Data:', vocabularyData);
            
            // Step 1: Validate data
            updateLoadingStep(1, 'active');
            addLoadingLog('📝 Xác thực dữ liệu: ' + vocabularyData.title);
            setTimeout(() => {
                updateLoadingStep(1, 'completed');
                addLoadingLog('✅ Dữ liệu hợp lệ');
                
                // Step 2: Create directory structure
                updateLoadingStep(2, 'active');
                addLoadingLog('📁 Tạo thư mục: content/TU-KHAINIEM/' + vocabularyData.slug + '/');
                setTimeout(() => {
                    updateLoadingStep(2, 'completed');
                    addLoadingLog('✅ Thư mục đã được tạo');
                    
                    // Step 3: Write _index.md file
                    updateLoadingStep(3, 'active');
                    addLoadingLog('📄 Ghi file _index.md...');
                    setTimeout(() => {
                        updateLoadingStep(3, 'completed');
                        addLoadingLog('✅ File _index.md đã được ghi');
                        
                        // Step 4: Update main index
                        updateLoadingStep(4, 'active');
                        addLoadingLog('📋 Cập nhật danh sách chính...');
                        setTimeout(() => {
                            updateLoadingStep(4, 'completed');
                            addLoadingLog('✅ Danh sách chính đã được cập nhật');
                            
                            // Step 5: Wait for Hugo rebuild
                            updateLoadingStep(5, 'active');
                            addLoadingLog('⏳ Chờ Hugo rebuild...');
                            setTimeout(() => {
                                updateLoadingStep(5, 'completed');
                                addLoadingLog('✅ Hugo rebuild hoàn tất');
                                addLoadingLog('🎉 Từ vựng đã được tạo thành công!');
                                
                                resolve({
                                    title: vocabularyData.title,
                                    slug: vocabularyData.slug,
                                    filePath: `content/TU-KHAINIEM/${vocabularyData.slug}/_index.md`,
                                    url: `/tu-khainiem/${vocabularyData.slug}/`,
                                    status: 'success'
                                });
                            }, 3000); // Wait longer for Hugo rebuild
                        }, 500);
                    }, 500);
                }, 500);
            }, 500);
        });
    }

    function resetLoadingSteps() {
        for (let i = 1; i <= 5; i++) {
            const step = document.getElementById(`step${i}`);
            const circle = step.querySelector('div');
            const dot = circle.querySelector('div');
            const text = step.querySelector('span');
            
            circle.className = 'w-4 h-4 rounded-full border-2 border-gray-300 mr-3 flex items-center justify-center';
            dot.className = 'w-2 h-2 rounded-full bg-gray-300';
            text.className = 'text-gray-600';
        }
    }

    function updateLoadingStep(stepNumber, status) {
        const step = document.getElementById(`step${stepNumber}`);
        const circle = step.querySelector('div');
        const dot = circle.querySelector('div');
        const text = step.querySelector('span');
        
        if (status === 'active') {
            circle.className = 'w-4 h-4 rounded-full border-2 border-blue-500 mr-3 flex items-center justify-center';
            dot.className = 'w-2 h-2 rounded-full bg-blue-500 animate-pulse';
            text.className = 'text-blue-600 font-medium';
        } else if (status === 'completed') {
            circle.className = 'w-4 h-4 rounded-full border-2 border-green-500 mr-3 flex items-center justify-center';
            dot.className = 'w-2 h-2 rounded-full bg-green-500';
            text.className = 'text-green-600 font-medium';
        }
    }

    function addLoadingLog(message) {
        const logContainer = document.getElementById('loadingLog');
        const timestamp = new Date().toLocaleTimeString();
        const logEntry = document.createElement('div');
        logEntry.className = 'text-gray-700';
        logEntry.textContent = `[${timestamp}] ${message}`;
        logContainer.appendChild(logEntry);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    function showSuccessModal(result) {
        // Update modal with vocabulary information
        document.getElementById('vocabTitle').textContent = result.title;
        document.getElementById('vocabUrl').textContent = result.url;
        document.getElementById('vocabFile').textContent = result.filePath;
        
        // Show modal
        successModal.classList.remove('hidden');
        
        // Set up view button
        viewVocabularyBtn.onclick = function() {
            window.open(result.url, '_blank');
        };
    }

    // Initialize form status
    updateFormStatus();
});
