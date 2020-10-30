import { shortVowels } from "./phonemes";
import flatten from "lodash/flatten";

const shortVowelsKeys = flatten(
  shortVowels.map((el) => {
    const examples = el[2];
    const sanitizedExamples = examples
      .replaceAll("<u>", "")
      .replaceAll("</u>", "")
      .split(", ");

    const filteredExamples = sanitizedExamples.filter(
      (example) => example.length > 2
    );

    return filteredExamples;
  })
);

export const mapping = [
  [["about", "author", "faith"], "about-author", "About the Author"],
  [["consonant"], "consonants", "Consonants"],
  [["vowel"], "vowels", "Vowels"],
  [[...shortVowelsKeys, "short vowel"], "short-vowels", "Short vowels"],
];
