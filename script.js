//paragraph where counter is displayed
const counterDisplay = document.getElementById("counter");

//button variables
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

/**
 * fetch counter from database
 */
async function fetchCounter(getUrl) {
  try {
    //fetch response
    const response = await fetch(getUrl);

    //check response ok
    if (!response.ok) {
      throw new Error("Response status: ", response.status);
    }

    //get json
    const json = await response.json();
    return json.count;
  } catch (error) {
    console.error(error);
  }
}

/**
 * fetch counter from API and display in counterDisplay
 */
async function updateCounter() {
  //define url
  const getUrl = "https://api.counterapi.dev/v1/halloween/CTL";

  //get counter and update
  const counter = await fetchCounter(getUrl);
  counterDisplay.innerHTML = counter;
}

async function minusButtonClick() {
  const getUrl = "https://api.counterapi.dev/v1/halloween/CTL/down";

  //get counter and update
  const counter = await fetchCounter(getUrl);
  counterDisplay.innerHTML = counter;
}

async function plusButtonClick() {
  const getUrl = "https://api.counterapi.dev/v1/halloween/CTL/up";

  //get counter and update
  const counter = await fetchCounter(getUrl);
  counterDisplay.innerHTML = counter;
}

minusButton.onclick = minusButtonClick;
plusButton.onclick = plusButtonClick;

//update the counter every second
setInterval(updateCounter, 1000);
