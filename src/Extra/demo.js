function User(email, name) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email, "has logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email, "has logged out");
};

let userOne = new User("kranthi@gamil", "kra");
let userTwo = new User("Hayu@com", "hay");

console.log(userOne.login());
userTwo.login();

function User(name, email) {
  this.name = name;
  this.email = email;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  console.log(this.email + " " + "logged in");
};

User.prototype.logout = function () {
  this.online = false;
  console.log(this.email + " " + "logged out");
};

function Admin(name, email, salary) {
  User.call(this, name, email);
  this.salary = salary;
}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function (u) {
  users = users.filter((user) => {
    return user.email !== u.email;
  });
};

let user1 = new User("kranthi", "kra@gamil.com");
let user2 = new User("Hayu", "Hayu@gmail.com");
let admin = new Admin("Tyson", "Tyson@gmail.com", 3000);

let users = [user1, user2, admin];

console.log(admin);

function getData() {
  let userLeft = false;
  let userWwe = true;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "USERLEFT |||||",
        message: ":(",
      });
    } else if (userWwe) {
      reject({
        name: "USERWATCHING WWE |||||",
        message: "DEVELOP < WWE",
      });
    } else {
      resolve(`Hit to subscribe`);
    }
  });
}

getData()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

class Home {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getName() {
    return this.name + " " + this.email;
  }
}

let res = new Home("kranthi", "kranthi@gmail.com");

class Room extends Home {
  constructor(name, email, salary) {
    super(name, email);
    this.salary = salary;
    this.online = false;
  }
}

Room.prototype.login = function () {
  this.online = true;
  console.log(`User logged in`);
};
let resRoom = new Room("Mouni", "Mouni@cheater.com", 3000);

console.log(resRoom);
resRoom.login();

console.log(null.toString());

function makReq(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google Says Hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processReq(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing Response");
    resolve(`Extra information + ${response}`);
  });
}

async function doWork() {
  try {
    let res = await makReq("Googl");
    console.log("response received");
    let procRes = await processReq(res);
    console.log(procRes);
  } catch (err) {
    console.log(err);
  }
}

doWork();
