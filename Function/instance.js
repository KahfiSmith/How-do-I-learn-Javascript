class User {
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }
  isAdmin() {
    return this.role === 'admin';
  }
}

const user = new User("Ganda", "ganda@example.com", "admin");
if (user.isAdmin()) {
  console.log("Selamat Datang, admin!");
} else {
  console.log("Error, anda bukan admin");
}
