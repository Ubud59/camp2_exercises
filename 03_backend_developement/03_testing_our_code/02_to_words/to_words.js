function toWords(sentence) {

  if (!sentence) {
    return undefined;
  }
  const allWords = sentence.split(/[.?!;, :]+/);
  return allWords.filter(word => word !== "");
}

module.exports = toWords;
