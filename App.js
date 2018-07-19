let coursetable = Vue.component('coursetable', {
  props: ['title', 'courses'],
  template: `
  <div>
  <h2>{{ title }}</h2>
  <table>
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Org</th>
        <th scope="col">Dep</th>
        <th scope="col">level</th>
        <th scope="col">Open material</th>
        <th scope="col">Tags</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="course in courses" :key="course.id">
          <td>{{ course.courseCode }}</td>
          <td><a :href="course.url">{{ course.name }}</a></td>
          <td>{{ course.organiser }}</td>
          <td>{{ course.department }}</td>
          <td>{{ course.level  }}</td>
          <td>{{ course.openMaterial }}</td>
          <td><span v-for="tag in course.tags"><button>{{ tag }}</button></span></td>
      </tr>
    </tbody>
  </table>
  </div>
  `
})

new Vue({
  el: '#app',
  data: { 
    courses: [],
    title: "initial",
    counter: 0
  },
  computed: {
    progrCourses: function () {
      return this.courses.filter(course => course.tags.includes("programming"))
    },
    uiCourses: function () {
      return this.courses.filter(course => course.tags.includes("ui"))
    },
    cybersecCourses: function () {
      return this.courses.filter(course => course.tags.includes("cybersecurity"))
    },
    dsCourses: function () {
      return this.courses.filter(course => course.tags.includes("datascience"))
    }
  },
  components: { coursetable: coursetable},
  methods: {
    showState: function (event) {
      console.log("courses:", this.courses)
      console.log("csCourses:", this.csCourses)
    }
  },
  mounted () {
    axios
      .get('./assets/courses.json')
      .then(res => (this.courses = res.data))
  }
});