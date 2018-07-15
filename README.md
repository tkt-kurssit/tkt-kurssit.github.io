# tkt-kurssit.github.io

List of computer science related courses from various universities

### Adding courses to the list

Add course info to [assets/courses.json](assets/courses.json)

### Add new list

Edit `index.html`, add similar line:

```
<coursetable title="UI courses" :courses="uiCourses"></coursetable>
```

Also edit App.js, add another computed variable like this:

```
uiCourses: function () {
  return this.courses.filter(course => course.tags.includes("ui"))
}
```

### Development

Made with vue. No `npm` etc used.
