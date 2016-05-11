# The Other Side of Empathy Resources

This is a site for gathering resource to learn about and encourage empathy. It can be a book, blog post, podcast, video, etc; as long as you think it helped you understand empathy or empathize with someone else, open an issue or pull request to add it to this site. 

## Contributing

There are two ways to contribute a resource to this project: [Locally with git](#local) or [Using the web UI](#web)


### Local

1. Fork this repo 
2. Clone it locally
3. Create a new `.md` file in `src/posts/` named by the title of the resource, i.e. `My-Post-Title.md`
4. Add all the details of your suggested resource using [this template](#template) as a base
5. `git add -A` && commit your new resource
6. Push it up to your fork
7. [Open a pull request](https://github.com/HipsterBrown/the-other-side-of-empathy/pulls)


### Web

1. Fork this repo 
1. Click the "New file" button next to the green "New pull request" button
2. In the "Name your file..." box, enter `src/posts/My-Post-Title.md` where `My-Post-Title` is the name of your resource
3. In the large textbox, use [the template](#template) to add the necessary details about your resource
4. In the box below "Commit new file" (near the bottom of the page), add a message about adding your new resource, i.e. "Adding 'My Post Title' to the site"
5. Make sure the "Create a new branch..." option is selected before clicking the "Propose new file" button
6. [Open a pull request](https://github.com/HipsterBrown/the-other-side-of-empathy/pulls)


### Template

```markdown
---
title: My Post Title
publishDate: 2015-04-20
author: Hipsterbrown
link: http://someblog.com/my-article-title.html
layout: post.hbt (<- don't change that)
medium: (choose one of the following and list it like shown below)
- blog
- podcast
- video
- book
tenant: (choose one or more of the following and list it like shown below)
- communication
- caring
- context
- constructive
---

Put a brief description of why you like this resource and believe it encapsulates at least one of the tenants of empathy here in place of this sentence (could also be a paragraph or more, write to your heart's content).
```

## Feedback

If you found an issue or have constructive feedback for the site, please feel free to [open an issue](https://github.com/HipsterBrown/the-other-side-of-empathy/issues/new)
