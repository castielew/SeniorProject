import React, { useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import '../Css/BlogEditor.css';

const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [keywords, setKeywords] = useState('');
  const [hashtags, setHashtags] = useState('');

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: 'Write your blog content here...',
      }),
    ],
    content: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const content = editor.getHTML();
    console.log({
      title,
      summary,
      keywords,
      hashtags,
      content,
    });
    alert("Blog submitted! (check console)");
  };

  return (
    <div className="container mt-4">
      <div className="card p-4 shadow-sm">
        <h4 className="mb-4">Write a Blog</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Blog Image</label>
            <input type="file" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Title</label>
            <input
              type="text"
              className="form-control"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Body</label>
            <div className="editor-box">
              <EditorContent editor={editor} />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Summary (max 160 characters)</label>
            <input
              type="text"
              maxLength="160"
              className="form-control"
              required
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Keywords</label>
            <input
              type="text"
              className="form-control"
              required
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Blog Hashtags</label>
            <input
              type="text"
              className="form-control"
              value={hashtags}
              onChange={(e) => setHashtags(e.target.value)}
            />
          </div>

          <div className="d-flex gap-2 mt-4">
            <button type="submit" className="btn btn-primary">Submit</button>
            <button type="button" className="btn btn-secondary">Save as Draft</button>

          </div>
          <a href="http://localhost:5174/mainfunds" className="btn btn-outline-secondary my-3 ">
  ← Back to Main
</a>
        </form>
      </div>

    </div>
  );
};

export default BlogEditor;
