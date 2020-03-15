export default class ActorModel {
  constructor(actor) {
    this.id = actor.id;
    this.fName = actor.fName;
    this.lName = actor.lName;
    this.birthday = actor.birthday;
    this.imageUrl = actor.imageUrl;
    this.imdbLink = actor.imdbLink;
    this.age = this.getAge(actor.birthday);
  }
  getAge(birthday) {
    let birthYear = new Date(birthday).getFullYear();
    let currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
}
