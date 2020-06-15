---
title: '안녕! 세계!'
date: '2020-06-16'
---

드디어 예제 홈페이지에서 한글을 표현하게 되었습니다.

원래 데모 사이트의 것을 가져와서 만들려고 했는데... 

로컬에서는 잘되는데, 깃허브에 올린 후 vercel에 올리면 문제가 발생해서 어떻게 해야할지 고민되네요!

음.. 여기는 하나씩 뭔가 만들어가는 재미가 있는 곳입니다. ㅋㅋㅋ

We recommend using **Static Generation** (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.