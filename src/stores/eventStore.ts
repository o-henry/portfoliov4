import { observable, action } from "mobx";

export default class EventStore {
  @observable isWelcomeClicked = false;

  @action
  onClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.isWelcomeClicked = !this.isWelcomeClicked;
  };
}
