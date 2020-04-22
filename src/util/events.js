export class Event {
  constructor(propsObject = {}) {
    this.title = propsObject?.title ?? "";
    this.startDate = propsObject?.startDate ?? new Date();
    this.endDate = propsObject?.endDate ?? new Date();
    this.startTime = propsObject?.startTime ?? "";
    this.endTime = propsObject?.endTime ?? "";
    this.people = propsObject?.people ?? "";
    this.location = propsObject?.location ?? "";
    this.description = propsObject?.description ?? "";
    this.id = Math.floor(Math.random() * 1000000000);
  }
}
