/**
 * Retourne le nombre de jours dans le mois pour l'année et le mois spécifiés.
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
export function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Retourne le jour de la semaine du premier jour du mois.
 * (0 = dimanche, 1 = lundi, etc.)
 * @param {number} year
 * @param {number} month
 * @returns {number}
 */
export function firstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

export const formatDate = (date) => {
  if (!date) return "";
  if (!date.getDate) return "";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const parseDateString = (value) => {
  const parts = value.split("/");
  if (parts.length !== 3) return null;

  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const year = parseInt(parts[2], 10);

  if (isNaN(day) || isNaN(month) || isNaN(year)) return null;

  const newDate = new Date(year, month, day);

  if (newDate.getDate() === day && newDate.getMonth() === month && newDate.getFullYear() === year) {
    return newDate;
  }
  return null;
};
