import moment from "moment";
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const submitBtn = document.getElementById("submit");
const dayResult = document.getElementById("day-result");
const monthResult = document.getElementById("month-result");
const yearResult = document.getElementById("year-result");
const dayError = document.getElementById("day-error");
const monthError = document.getElementById("month-error");
const yearError = document.getElementById("year-error");

const now = moment();

submitBtn.addEventListener("click", () => {
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const birthDate = moment(`${year}-${month}-${day}`, "YYYY-MM-DD");
  if (day.length === 0) {
    dayError.innerHTML = "This field is required";
    dayError.classList.remove("hidden");
    dayInput.classList.remove("border-neutral-light-grey");
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
  }
  if (month.length === 0) {
    monthError.innerHTML = "This field is required";
    monthError.classList.remove("hidden");
    monthInput.classList.remove("border-neutral-light-grey");
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
  }
  if (year.length === 0) {
    yearError.innerHTML = "This field is required";
    yearError.classList.remove("hidden");
    yearInput.classList.remove("border-neutral-light-grey");
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
  }
  if (moment(`${year}`).isAfter(now)) {
    yearError.innerHTML = "Must be in the past";
    yearError.classList.remove("hidden");
    yearInput.classList.remove("border-neutral-light-grey");
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
  }
  if (!birthDate.isValid()) {
    dayError.innerHTML = "Must be a valid date";
    dayError.classList.remove("hidden");
    dayInput.classList.remove("border-neutral-light-grey");
    dayInput.style.borderColor = "hsl(0, 100%, 67%)";
    monthInput.classList.remove("border-neutral-light-grey");
    monthInput.style.borderColor = "hsl(0, 100%, 67%)";
    yearInput.classList.remove("border-neutral-light-grey");
    yearInput.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (
    birthDate.isValid() &&
    year.length == 4 &&
    month.length !== 0 &&
    day.length !== 0
  ) {
    const diff = now.diff(birthDate, "milliseconds");
    const duration = moment.duration(diff);
    dayResult.innerHTML = `${duration.days()}`;
    monthResult.innerHTML = `${duration.months()}`;
    yearResult.innerHTML = `${duration.years()}`;

    dayError.classList.add("hidden");
    dayInput.style.borderColor = "hsl(0, 0%, 86%)";
    monthError.classList.add("hidden");
    monthInput.style.borderColor = "hsl(0, 0%, 86%)";
    yearError.classList.add("hidden");
    yearInput.style.borderColor = "hsl(0, 0%, 86%)";
  }
});
