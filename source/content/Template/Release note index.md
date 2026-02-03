---
draft: false
tags:
  - PatchNotes
title: Release Notes
aliases:
  - Release Note
  - Release Note Index
  - Release Notes Index
publish: true
---
```dataviewjs
const currentFolder = dv.current().file.folder;
let pages = dv.pages(`"${currentFolder}"`)
    .where(p => p.file.path !== dv.current().file.path)
    .sort(p => p.date, 'desc'); 

const pageArray = Array.from(pages);

for (let i = 0; i < pageArray.length; i++) {
    const page = pageArray[i];
    let formattedDate = "";
    if (page.date) {
        const d = new Date(page.date);
        formattedDate = d.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    }

    dv.header(2, `${page.file.link} <span style="float:right; font-weight:normal; font-size: 0.75em; opacity: 0.6;">${formattedDate}</span>`);
    
    const file = app.vault.getAbstractFileByPath(page.file.path);
    const content = await app.vault.read(file);
    const cleanContent = content.replace(/^---[\s\S]+?---\s*/, "");

    dv.paragraph(cleanContent);
    
    if (i < pageArray.length - 1) {
        dv.el("hr", "");
    }
}
```



