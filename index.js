function superbowlWin(arr) {
  const record = arr.find((r) => { return r.result === "W" })
  return (record !== undefined ) ? record.year : record 
}