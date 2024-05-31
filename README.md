## Introduction

This is a basic wysiwyg text editor without using any editor libraries.

Being a basic editor, I've used `execCommand` which is deprecated but still kicking in on all browsers. For a more future-proofed and consistent editor, you should use the Range API or powerful libraries like TinyMCE, Quill, etc.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
