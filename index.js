const app = Vue.createApp({
  data() {
    return {
      firstName: 'ehab',
      lastName: 'wasel',
      email: 'ehab.wasel33@example.com',
      gender: 'mail',
      picture: 'https://randomuser.me/api/portraits/men/43.jpg',
      phone: '093104',
      age: '32',
    };
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api');
      const { results } = await res.json();
      console.log(results);
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.age = results[0].dob.age;
      this.phone = results[0].phone;
      this.picture = results[0].picture.large;
    },
  },
});
app.mount('#app');
