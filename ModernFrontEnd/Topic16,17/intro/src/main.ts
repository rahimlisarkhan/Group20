function convertTime(time: number, isCalendar: boolean): number[] {
  if (isCalendar) {
    return [time * 2, time * 3];
  }

  return [1, 2, 3];
}
