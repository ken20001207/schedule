/**
 * 班表 Schedule
 *
 * 对应数据库的 schedules 集合 */
export default class Schedule {
    _id: string;
    ownerID: string;
    title: string;
    description: string;
    tag: string;
    attenders: Array<string>;
    bancis: Array<string>;
    startact: Date;
    endact: Date;

    constructor(data: any) {
        this._id = data._id;
        this.ownerID = data.ownerID;
        this.title = data.title;
        this.description = data.description;
        this.tag = data.tag;
        this.attenders = data.attenders;
        this.bancis = data.bancis;
        this.startact = new Date(data.startact);
        this.endact = new Date(data.endact);
    }
}
