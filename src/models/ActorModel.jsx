export default class ActorModel {
  constructor(actor) {
    this.id = actor.id;
    this.fName = actor.fName;
    this.lName = actor.lName;
    // this.birthday = actor.birthday;
    this.birthday = actor.birthday;
    this.imageUrl = actor.imageUrl;
    this.imdbLink = actor.imdbLink;
    // this.getAge = getAge(actor.birthday);
  }
  getAge() {
    let birthYear = new Date(this.birthday).getFullYear();
    let currentYear = new Date().getFullYear();

    return currentYear - birthYear;
  }
}
