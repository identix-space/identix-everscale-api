/**
 * Formats datetime in second to '<HH> h <mm> min <ss> sec' format
 *
 * @param datetimeInSeconds
 */
export function formatDatetime(datetimeInSeconds: number): string {
  if (!datetimeInSeconds) {
    return '';
  }

  let leftHours = 0;
  let leftHoursString = '';
  if (datetimeInSeconds > 3600) {
    leftHours = Math.trunc(datetimeInSeconds / 3600);
    leftHoursString = `${leftHours} h`;
  }

  let leftMinutes = 0;
  let leftMinutesString = '';
  if (datetimeInSeconds - leftHours * 3600 > 60) {
    leftMinutes = Math.trunc((datetimeInSeconds - leftHours * 3600) / 60);
    leftMinutesString = ` ${leftMinutes} min`;
  }

  const leftSecondsString = ` ${(datetimeInSeconds - leftHours * 3600 - leftMinutes * 60).toFixed(
    2,
  )} sec`;

  return `${leftHoursString}${leftMinutesString}${leftSecondsString}`.trim();
}
