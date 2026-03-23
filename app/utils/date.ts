export const getUpcomingDateRange = (daysAhead = 30) => {
  const today = new Date();

  const minDate = today.toISOString().split("T")[0];

  const max = new Date();
  max.setDate(today.getDate() + daysAhead);

  const maxDate = max.toISOString().split("T")[0];

  return { minDate, maxDate };
};
