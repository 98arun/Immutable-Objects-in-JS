let i = 0;
async function inc() {
  i++;
  if (i > 2) {
    return Promise.reject("reached end");
  }
  return i;
}
(async () => {
  try {
    await Promise.all([inc(), inc(), inc(), inc(), inc()]);
  } catch (err) {
    //ignore
  }
  console.log(i);
})();
