function demoErrorEvent(str) {
  if (typeof str !== "string") {
    throw new Error("Invalid input");
  }
}

if (!demoErrorEvent()) {
  console.log("Success");
} else {
  console.log("Error");
}
