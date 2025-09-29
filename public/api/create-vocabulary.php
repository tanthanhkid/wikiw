<?php
// Simple PHP API to create vocabulary
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Get POST data
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Invalid JSON data']);
    exit();
}

$title = $input['title'] ?? '';
$content = $input['content'] ?? '';
$tags = $input['tags'] ?? [];
$categories = $input['categories'] ?? [];

if (empty($title) || empty($content)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Title and content are required']);
    exit();
}

// Generate slug
function generateSlug($title) {
    $title = strtolower($title);
    $title = preg_replace('/[^\p{L}\p{N}\s-]/u', '', $title);
    $title = preg_replace('/\s+/', '-', $title);
    $title = preg_replace('/-+/', '-', $title);
    $title = trim($title, '-');
    return $title;
}

$slug = generateSlug($title);
$date = date('Y-m-d');

// Create directory
$dirPath = "../content/TU-KHAINIEM/$slug";
if (!is_dir($dirPath)) {
    mkdir($dirPath, 0755, true);
}

// Generate markdown content
$tagsYaml = !empty($tags) ? 'tags: ["' . implode('", "', $tags) . '"]' : 'tags: [""]';
$categoriesYaml = !empty($categories) ? 'categories: ["' . implode('", "', $categories) . '"]' : 'categories: [""]';

$markdownContent = "---
title: \"$title\"
description: \"\"
date: $date
draft: false
weight: 59
$tagsYaml
$categoriesYaml
---

# $title

<!-- **Mã:** 
**Nhóm:**  -->

## Khái Niệm

$content";

// Create _index.md file
$filePath = "$dirPath/_index.md";
file_put_contents($filePath, $markdownContent);

// Update main index file
$mainIndexPath = "../content/TU-KHAINIEM/_index.md";
$mainContent = file_get_contents($mainIndexPath);

// Find the last entry in the table and add new entry
preg_match_all('/\|\| \[([^\]]+)\]\(([^)]+)\) \| ([^|]*?) \|/', $mainContent, $matches, PREG_SET_ORDER);
$lastEntry = end($matches);

if ($lastEntry) {
    $newEntry = "|| [$title]($slug/) | " . substr($content, 0, 100) . "... |";
    $mainContent = str_replace($lastEntry[0], $lastEntry[0] . "\n" . $newEntry, $mainContent);
    file_put_contents($mainIndexPath, $mainContent);
}

// Return success response
echo json_encode([
    'success' => true,
    'data' => [
        'title' => $title,
        'slug' => $slug,
        'filePath' => $filePath,
        'url' => "/tu-khainiem/$slug/"
    ]
]);
?>
