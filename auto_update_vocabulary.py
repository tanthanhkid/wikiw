#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Script tự động cập nhật bảng từ vựng - khái niệm
Lấy nội dung từ các file markdown tương ứng và điền vào cột "Khái niệm"
"""

import os
import re
from pathlib import Path

def extract_concept_from_markdown(file_path):
    """
    Trích xuất nội dung khái niệm từ file markdown
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Tìm phần "## Khái Niệm" và lấy nội dung sau đó
        pattern = r'## Khái Niệm\s*\n(.*?)(?=\n##|\Z)'
        match = re.search(pattern, content, re.DOTALL)
        
        if match:
            concept_text = match.group(1).strip()
            # Loại bỏ các dòng trống và ký tự đặc biệt
            concept_text = re.sub(r'\n\s*\n', ' ', concept_text)
            concept_text = re.sub(r'\s+', ' ', concept_text)
            # Loại bỏ các ký tự đặc biệt markdown
            concept_text = re.sub(r'\*([^*]+)\*', r'\1', concept_text)  # Loại bỏ italic
            concept_text = re.sub(r'#+', '', concept_text)  # Loại bỏ headers
            concept_text = re.sub(r'<!--.*?-->', '', concept_text, flags=re.DOTALL)  # Loại bỏ comments
            concept_text = re.sub(r'["""]', '"', concept_text)  # Chuẩn hóa dấu ngoặc kép
            concept_text = concept_text.strip()
            return concept_text
        
        return ""
    except Exception as e:
        print(f"Lỗi khi đọc file {file_path}: {e}")
        return ""

def truncate_text(text, max_length=15):
    """
    Cắt ngắn text và thêm dấu ...
    """
    if len(text) <= max_length:
        return text
    return text[:max_length] + "..."

def update_vocabulary_table():
    """
    Cập nhật bảng từ vựng với nội dung tự động lấy từ các file markdown
    """
    # Đường dẫn đến thư mục TU-KHAINIEM
    tu_khainiem_dir = Path("content/TU-KHAINIEM")
    index_file = tu_khainiem_dir / "_index.md"
    
    if not index_file.exists():
        print(f"Không tìm thấy file {index_file}")
        return
    
    # Đọc file _index.md hiện tại
    with open(index_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Tìm tất cả các dòng trong bảng
    table_pattern = r'\| \[([^\]]+)\]\(([^)]+)\) \| ([^|]*) \|'
    matches = re.findall(table_pattern, content)
    
    updated_content = content
    updated_count = 0
    
    for match in matches:
        title, link_path, current_concept = match
        
        # Nếu đã có nội dung khái niệm, bỏ qua
        if current_concept.strip():
            continue
            
        # Tìm file markdown tương ứng
        folder_name = link_path.rstrip('/')
        markdown_file = tu_khainiem_dir / folder_name / "_index.md"
        
        if markdown_file.exists():
            concept_text = extract_concept_from_markdown(markdown_file)
            if concept_text and concept_text != "Đang trong quá trình bổ sung nội dung!" and concept_text != "Đang trong quá trình bổ sung!":
                # Cắt ngắn và thêm dấu ...
                truncated_concept = truncate_text(concept_text, 15)
                
                # Thay thế trong nội dung
                old_line = f"| [{title}]({link_path}) | {current_concept} |"
                new_line = f"| [{title}]({link_path}) | {truncated_concept} |"
                
                updated_content = updated_content.replace(old_line, new_line)
                print(f"Đã cập nhật: {title} -> {truncated_concept}")
                updated_count += 1
            else:
                # Nếu không có nội dung thực sự, thêm placeholder
                old_line = f"| [{title}]({link_path}) | {current_concept} |"
                new_line = f"| [{title}]({link_path}) | Đang trong quá trình bổ sung... |"
                
                updated_content = updated_content.replace(old_line, new_line)
                print(f"Đã thêm placeholder cho: {title}")
                updated_count += 1
        else:
            print(f"Không tìm thấy file: {markdown_file}")
    
    # Ghi lại file
    with open(index_file, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"Hoàn thành cập nhật bảng từ vựng! Đã cập nhật {updated_count} dòng.")

if __name__ == "__main__":
    update_vocabulary_table()
