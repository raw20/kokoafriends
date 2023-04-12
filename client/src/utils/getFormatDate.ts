interface IGetDate {
  getFullYear: () => number;
  getMonth: () => number;
  getDate: () => number;
  getHours: () => number;
  getMinutes: () => number;
  getSeconds: () => number;
}

function getFormatDate(date: IGetDate) {
  let year = date.getFullYear();
  let month: string | number = 1 + date.getMonth();
  month = month > 10 ? month : "0" + month;
  let day: string | number = date.getDate();
  day = day > 10 ? day : "0" + day;
  let hours: string | number = date.getHours();
  hours = hours > 10 ? hours : "0" + hours;
  let minutes: string | number = date.getMinutes();
  minutes = minutes > 10 ? minutes : "0" + minutes;
  let seconds: string | number = date.getSeconds();
  seconds = seconds > 10 ? seconds : "0" + seconds;

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} `;
}

export default getFormatDate;
